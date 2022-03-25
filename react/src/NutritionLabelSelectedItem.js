import React from 'react';
import { FOODS } from './data/foods';
import './App.css';

/**
 * Client 3
 * @author Phil Ganem
 */

/**
 * Component to the nutrition label of a selected menu item
 * @param {*} props 
 * @returns JSX
 */
function NutritionLabelSelectedItem(props) {
	//Deconstruct props
    const {user_selected_menu_item} = props;

    

    //Obtains and renders the nutrition values of the selected menu item
    const render_nutrition_label = () => {
        if (user_selected_menu_item !== '') {
            var temp = user_selected_menu_item.charAt(0).toUpperCase() + user_selected_menu_item.slice(1);
            return (
                <>
                    <h5>Calories: {FOODS[temp]['calories']}</h5>
                    <h5>Total Fat: {FOODS[temp]['totalFat']}</h5>
                    <h5>Saturated Fat: {FOODS[temp]['saturatedFat']}</h5>
                    <h5>Trans Fat: {FOODS[temp]['transFat']}</h5>
                    <h5>Protein: {FOODS[temp]['protein']}</h5>
                    <h5>Carbohydrates: {FOODS[temp]['carbohydrate']}</h5>
                </>
            )
        }
        return (
            <>
                <h5>Calories: 0</h5>
                <h5>Total Fat: 0</h5>
                <h5>Saturated Fat: 0</h5>
                <h5>Trans Fat: 0</h5>
                <h5>Protein: 0</h5>
                <h5>Carbohydrates: 0</h5>
            </>
        )
    }

	// JSX
	return (
	<>
        <h4>Nutrition of Selected Item</h4>
        <h4>-----------------------------</h4>
        {render_nutrition_label()}
        
	</>
	);
}

export default NutritionLabelSelectedItem;