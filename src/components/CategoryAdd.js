import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories, categories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ({target}) =>{
        setInputValue(target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if( !(categories.find( i => i === inputValue)) ){
                if (inputValue.trim().length > 2){
                    setCategories([inputValue, ...categories]);
                    setInputValue('');
                }else{
                    console.log('Tamaño Minimo requerido: 2 ');
                };
        }else{
            console.log('Ya existe');
            setInputValue('');
        };
    };
    return (
        <form onSubmit={ handleSubmit }>
            <h2>Category Add</h2>
            <input 
                type="text"
                value={inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}


export default CategoryAdd;

CategoryAdd.propTypes ={
    setCategories : PropTypes.func.isRequired
}