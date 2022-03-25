import React, { useEffect } from 'react';
import { Row, Col, Container, Progress, Input} from 'reactstrap';
import CatagorySelect from './CatagorySelect';
import Menu from './Menu';
import SelectedItems from './SelectedItems';
import NutritionLabelSelectedItem from './NutritionLabelSelectedItem';
import FoodEdit from './FoodEdit';
import CatagoryGoals from './CatagoryGoals';
import NutritionLabelGoals from './NutritionLabelGoals';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FOODS } from './data/foods';

import './App.css';

/**
 * Client 3
 * @author Phil Ganem
 */

/**
 * Nutrikit application
 */
function App() {

	//Stores and sets the users selected category of food
	const [selected_category, setSelectedCategory] = React.useState('');
	//Stores and sets the menu items for the selected category
	const [menu_items, setMenuItems] = React.useState([]);
	//Stores and sets the users selected item for the menu
	const [user_selected_menu_item, setUserSelectedItem] = React.useState('');
	//Stores and sets all of the users selected items
	const [selected_items, setSelectedItems] = React.useState([]);
	//Stores and sets the total calories for the selected items
	const [total_calories, setTotalCalories] = React.useState(0);
	//Stores and sets the users input for the calories
	const [user_calories, setUserCalories] = React.useState(2000);
	//Stores and sets the total nutrients for the selected items
	const [total_nutrients, setTotalNutrients] = React.useState({
		calories: 0,
		totalFat: 0,
		saturatedFat: 0,
		transFat: 0,
		protein: 0,
		carbohydrate: 0
	});

	useEffect(() => {
		//sets all total nutrients to 0
		setTotalNutrients({
			calories: 0,
			totalFat: 0,
			saturatedFat: 0,
			transFat: 0,
			protein: 0,
			carbohydrate: 0
		});
		//updates the total total nutrients
		for (let i = 0; i < selected_items.length; i++) {
			setTotalNutrients({
				calories: total_nutrients['calories'] + FOODS[selected_items[i]]['calories'],
				totalFat: total_nutrients['totalFat'] + FOODS[selected_items[i]]['totalFat'],
				saturatedFat: total_nutrients["saturatedFat"] + FOODS[selected_items[i]]['saturatedFat'],
				transFat: total_nutrients['transFat'] + FOODS[selected_items[i]]['transFat'],
				protein: total_nutrients['protein'] + FOODS[selected_items[i]]['protein'],
				carbohydrate: total_nutrients['carbohydrate'] + FOODS[selected_items[i]]['carbohydrate']
			});
		}
	}, [selected_items, total_nutrients]);

	 return (
		<>
			<Container >
				<Row>
					<Col>
					<h1 className = "Title">NutriKit food planner</h1>
					</Col>
				</Row>

				<Row>
					<Col>
					<h2 className = "Title">NutriKit allows you to select your groceries,
					and track your nutritional progress (good or bad)</h2>
					</Col>
				</Row>

				<Row>
					<Col >
						<CatagorySelect className = "CatagorySelect" 
						setSelectedCategory = {setSelectedCategory}>
						</CatagorySelect>
					</Col>
					<Col>
						<Menu 
						selected_category = {selected_category} 
						setMenuItems = {setMenuItems} 
						menu_items = {menu_items} 
						setUserSelectedItem = {setUserSelectedItem} 
						setSelectedItems = {setSelectedItems}
						user_selected_menu_item = {user_selected_menu_item}
						selected_items = {selected_items}
						total_calories = {total_calories}
						setTotalCalories = {setTotalCalories}>
						</Menu>
					</Col>
					<Col>
						<SelectedItems
						selected_items = {selected_items}
						user_selected_menu_item = {user_selected_menu_item}
						setSelectedItems = {setSelectedItems}
						setUserSelectedItem = {setUserSelectedItem}
						total_calories = {total_calories}
						setTotalCalories = {setTotalCalories}>
						</SelectedItems>
					</Col>
					<Col>
						<FoodEdit></FoodEdit>
					</Col>
				</Row>

				<Row>
					<br></br>
					<Col>
						<NutritionLabelSelectedItem
							user_selected_menu_item = {user_selected_menu_item}
						></NutritionLabelSelectedItem>
					</Col>
					<Col>
						{/* <NutritionLabelAll>
							total_nutrients = {total_nutrients}
						</NutritionLabelAll> */}
						<h4>Nutrition of all items</h4>
      				    <h4>-----------------------------</h4>
						<h5>Calories: {total_nutrients["calories"]}</h5>
						<h5>Fat: {total_nutrients["totalFat"]}</h5>
						<h5>Saturated Fat: {total_nutrients["saturatedFat"]}</h5>
						<h5>Trans Fat: {total_nutrients["tranFat"]}</h5>
						<h5>Carbs: {total_nutrients["carbohydrates"]}</h5>
						<h5>Protein: {total_nutrients["protein"]}</h5>
					</Col>
					<Col>
						<NutritionLabelGoals></NutritionLabelGoals>
					</Col>
				</Row>

				<Row>
					<Col>
						<br></br>
						<h3 className = "Title">Total calories: {total_calories}</h3>
						<Progress value={total_calories} max={user_calories}/>
						<Input placeholder="Input your caloric goal..." bsSize="sm" type="number" onChange={(e)=> setUserCalories(e.target.value)}></Input>
					</Col>
				</Row>
				<Row>
					<Col>
					<CatagoryGoals></CatagoryGoals>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
