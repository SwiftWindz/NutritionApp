import React from 'react';
import { FOODS } from './data/foods';
import './App.css';

/**
 * Client 3
 * @author Phil Ganem
 */

/**
 * Component to display and de-select the selected menu items
 * @param {*} props 
 * @returns JSX
 */
function SelectedItems(props) {
	//Deconstruct props
	const {selected_items,
		user_selected_menu_item,
		setSelectedItems,
		setUserSelectedItem,
		total_calories,
		setTotalCalories} = props;

	/**
	 * Function to remove a selected item from the selected items array
	 */
	const removeSelectedItem = () => {
		var temp = selected_items
		temp.splice(temp.indexOf(user_selected_menu_item), 1)
		// The JSON.parse and JSON.stringify is a really stupid fix I found online 
		// for instantaneously registering the change in the useState hook. W/o it,
		// the change is not registered until another component is changed
		setSelectedItems(JSON.parse(JSON.stringify(temp)));
		if(total_calories !== 0) {setTotalCalories(total_calories - FOODS[user_selected_menu_item]['calories']);}
	}

	// JSX
	return (
	<>
		<h2>Your Selected Items</h2>
		<select name="" size="5" onChange={(e) => setUserSelectedItem(e.target.value)}>
		{selected_items.map(m => <option value={m}> {m} </option>)}
		</select>
		<button onClick={removeSelectedItem}>{"<<"}</button>
		
	</>
	);
}

export default SelectedItems;
