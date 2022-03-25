import React from 'react';
// import { FOODS } from './data/foods';
import { Button, Input} from 'reactstrap';
import './App.css';

/**
 * Client 3
 * @author Phil Ganem
 */

/**
 * Component for editing food items
 * @param {*} props 
 * @returns JSX
 */
function FoodEdit() {
	//Deconstruct props
    const [selected_food, setSelectedFood] = React.useState('');
    const [selected_category, setSelectedCategory] = React.useState('');
    const [new_value, setNewValue] = React.useState('');

    var temp = [selected_category,new_value, selected_food];
    
    console.log(temp);

    //Function to change the catagory of the selected food
    // const changeValue = () => {
    //     FOODS[selected_food][selected_category] = new_value;
    // }
	// JSX
	return (
	<>
        <br></br>
        <h3>Food Editor</h3>
        <Input placeholder="API could not be reached..." bsSize="sm" onChange={(e)=> setSelectedFood(e.target.value)}></Input>
        <Input placeholder="API could not be reached..." bsSize="sm" onChange={(e)=> setSelectedCategory(e.target.value)}></Input>
        <Input placeholder="API could not be reached..." bsSize="sm" type = "number" onChange={(e)=> setNewValue(e.target.value)}></Input>
        <Button> Change Value</Button>

        <br></br>
        <h3>Food Delete</h3>
        <Input placeholder="{Food name} API could not be reached..." bsSize="sm" onChange={(e)=> setSelectedFood(e.target.value)}></Input>
        <Button>Delete Food</Button>

        <br></br>

        <h3>Food Add</h3>
        <Input placeholder="{Food name} API could not be reached..." bsSize="sm" onChange={(e)=> setSelectedFood(e.target.value)}></Input>
        <Input type = "number" placeholder="{Category} API could not be reached..." bsSize="sm" onChange={(e)=> setSelectedCategory(e.target.value)}></Input>
        <Input type = "number" placeholder="{Total fat} API could not be reached..." bsSize="sm" onChange={(e)=> setNewValue(e.target.value)}></Input>
        <Input type = "number" placeholder="{Saturated fat} API could not be reached..." bsSize="sm" onChange={(e)=> setNewValue(e.target.value)}></Input>
        <Input type = "number" placeholder="{Trans Fat} API could not be reached..." bsSize="sm" onChange={(e)=> setNewValue(e.target.value)}></Input>
        <Input type = "number" placeholder="{Protein} API could not be reached..." bsSize="sm" onChange={(e)=> setNewValue(e.target.value)}></Input>
        <Input type = "number" placeholder="{Carbohydrates} API could not be reached..." bsSize="sm" onChange={(e)=> setNewValue(e.target.value)}></Input>
        <Button>Add Food</Button>

	</>
	);
}

export default FoodEdit;