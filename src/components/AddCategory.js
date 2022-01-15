

import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    
    const [ inputValue, setInputValue ] = useState('');

    //funcion para el onchange del input para introducir un categoria
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    //funcion para el submit 'enter' para el formulario
    const handleSubmit = (e) => {
        e.preventDefault();     
        if(inputValue.trim().length > 2) {
            setCategories(categories => [ inputValue, ...categories ]);
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}