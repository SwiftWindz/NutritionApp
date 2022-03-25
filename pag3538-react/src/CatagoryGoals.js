import React, {useState} from 'react';
import {Input, Button} from 'reactstrap';
import './App.css';

/**
 * Client 4
 * @author Phil Ganem
 */

/**
 * Component for creating goal for a nutrition category
 * @param {*} props 
 * @returns JSX
 */
function CatagoryGoals(props) {

    const [selectedCatagory, setSelectedCatagory] = useState('');
    const [selectedGoal, setSelectedGoal] = useState('');

    console.log(selectedCatagory);
    console.log(selectedGoal);

    //JSX
    return (
        <>
            <h3>Set catagory goals</h3>
            <select id ={'selectedCatagory'} type = 'selectedCatagory'  size="1" onChange = {(e) => setSelectedCatagory(e.target.value)}>
                <option value=""></option>
                <option value="Calories">Calories</option>
                <option value="Total Fat">Total Fat</option>
                <option value="Saturated Fat">Saturated Fat</option>
                <option value="Trans Fat">Trans Fat</option>
                <option value="Protein">Protein</option>
                <option value="Carbohydrates">Carbohydrates</option>
            </select>
            <Input type = "number" placeholder="API could not be reached..." bsSize="sm" onChange={(e)=> setSelectedGoal(e.target.value)}></Input>
            <Button>Submit</Button>
        </>
    );
}

export default CatagoryGoals;