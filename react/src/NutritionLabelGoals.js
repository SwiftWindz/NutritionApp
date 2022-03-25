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
function NutritionLabelGoals(props) {

    const render_nutrition_label = () => {
        return (
            <>
                <h5>Calories: 0</h5>
                <h5>Fat: 0</h5>
                <h5>Saturated Fat: 0</h5>
                <h5>Trans Fat: 0</h5>
                <h5>Carbs: 0</h5>
                <h5>Protein: 0</h5>
            </>
        )
    }

	// JSX
	return (
	<>
        <h4>Nutritional goals</h4>
        <h4>-----------------------------</h4>
        {render_nutrition_label()}
	</>
	);
}

export default NutritionLabelGoals;