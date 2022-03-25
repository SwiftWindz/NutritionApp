import React from 'react';
import './App.css';

/**
 * Client 3
 * @author Phil Ganem
 */

/**
 * Component for selecting a catagory of menu items
 * @param {*} props 
 * @returns JSX
 */
function CatagorySelect(props) {

    //Deconstruct props
    const { setSelectedCategory} = props

    //JSX
    return (
        <>
            <h3>Categories</h3>
            <select id ={'selectedCatagory'} type = 'selectedCatagory'  size="1" onChange = {(e) => setSelectedCategory(e.target.value)}>
                <option value=""></option>
                <option value="Proteins">Proteins</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
                <option value="Grains">Grains</option>
            </select>
        </>
    );
}

export default CatagorySelect;
