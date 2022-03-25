import React from 'react';
import './App.css';

/**
 * Client 3
 * @author Phil Ganem
 */

/**
 * Component to the nutrition label all selected menu items
 * @param {*} props 
 * @returns JSX
 */
function NutritionLabelAll(props) {
	//Deconstruct props
    const {total_nutrients} = props;

    const render_nutrition_label = () => {
        return (
            <>
                <h4>Calories: {total_nutrients["calories"]}</h4>
                <h4>Fat: {total_nutrients["totalFat"]}</h4>
                <h4>Saturated Fat: {total_nutrients["saturatedFat"]}</h4>
                <h4>Trans Fat: {total_nutrients["tranFat"]}</h4>
                <h4>Carbs: {total_nutrients["carbohydrates"]}</h4>
                <h4>Protein: {total_nutrients["protein"]}</h4>
            </>
        )
    }

	// JSX
	return (
	<>
        <h4>Nutrition of all items</h4>
        <h4>-----------------------------</h4>
        {render_nutrition_label()}
	</>
	);
}

export default NutritionLabelAll;