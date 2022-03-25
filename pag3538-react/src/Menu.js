import React, {useEffect} from 'react';
// import { PROTEINS, FRUITS, VEGETABLES, DAIRY, GRAINS} from './data/constants';
import {FOODS} from './data/foods';
import './App.css';

/**
 * Client 3
 * @author Phil Ganem
 */

/**
 * Component to display and select the menu items
 * @param {*} props 
 * @returns JSX
 */
function Menu(props) {
	//Deconstruct props
	const {selected_category,
		setMenuItems,
		menu_items, 
		setUserSelectedItem, 
		setSelectedItems, 
		user_selected_menu_item, 
		selected_items,
		total_calories,
		setTotalCalories} = props;

	const addSelectedItem = () => {
		var temp = user_selected_menu_item.charAt(0).toUpperCase() + user_selected_menu_item.slice(1);
		setTotalCalories(total_calories + FOODS[temp]['calories']);
		setSelectedItems([...selected_items, temp]);
	}


	// When selected_category is changed, the menu items that are available for the user are updated.
	useEffect(() => {
		var url = '';
		var listofFoods = [];

		switch(selected_category){
			case "Proteins":
				url = 'http://127.0.0.1:5000/proteins';
				// Fetch the data from the API
				fetch(url)
				// Parse the response as JSON
				.then(response => response.json())
				.then(data => {
					for (var key in data) {listofFoods.push(data[key][1]);}
					setMenuItems(listofFoods);
				})
				.catch(error => {
					setMenuItems(["API could not be reached"]);
					console.log('There was an error: ', error)
				});
				break;
			case "Fruits":
				url = 'http://127.0.0.1:5000/fruits';
				// Fetch the data from the API
				fetch(url)
				// Parse the response as JSON
				.then(response => response.json())
				.then(data => {
					for (var key in data) {listofFoods.push(data[key][1]);}
					setMenuItems(listofFoods);
				})
				.catch(error => {
					setMenuItems(["API could not be reached"]);
					console.log('There was an error: ', error)
				});
				break;
			case "Vegetables":
				url = 'http://127.0.0.1:5000/vegetables';
				// Fetch the data from the API
				fetch(url)
				// Parse the response as JSON
				.then(response => response.json())
				.then(data => {
					for (var key in data) {listofFoods.push(data[key][1]);}
					setMenuItems(listofFoods);
				})
				.catch(error => {
					setMenuItems(["API could not be reached"]);
					console.log('There was an error: ', error)
				});
				break;
			case "Dairy":
				url = 'http://127.0.0.1:5000/dairy';
				// Fetch the data from the API
				fetch(url)
				// Parse the response as JSON
				.then(response => response.json())
				.then(data => {
					for (var key in data) {listofFoods.push(data[key][1]);}
					setMenuItems(listofFoods);
				})
				.catch(error => {
					setMenuItems(["API could not be reached"]);
					console.log('There was an error: ', error)
				});
				break;
			case "Grains":
				url = 'http://127.0.0.1:5000/grains';
				// Fetch the data from the API
				fetch(url)
				// Parse the response as JSON
				.then(response => response.json())
				.then(data => {
					for (var key in data) {listofFoods.push(data[key][1]);}
					setMenuItems(listofFoods);
				})
				.catch(error => {
					setMenuItems(["API could not be reached"]);
					console.log('There was an error: ', error)
				});
				break;
			default:
				break;
		}
		
	}, [selected_category, setMenuItems]);

	// JSX
	return (
	<>
		<h3>Menu</h3>
		<select name="" id="selected_foods" size="5" onChange={(e) => setUserSelectedItem(e.target.value)}>
		{menu_items.map(m=><option value={m}>{m}</option>)}
		</select>
		<button  onClick={addSelectedItem}>{">>"}</button>
	</>
	);
}
	

export default Menu;
