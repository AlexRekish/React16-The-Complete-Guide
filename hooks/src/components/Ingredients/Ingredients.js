import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);

    const onAddIngredient = ingredient => {
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    };

    const onRemoveIngredient = id => {
        setIngredients(prevIngredients => prevIngredients.filter(item => item.id !== id));
    };

    return (
        <div className="App">
            <IngredientForm onAddIngredient={onAddIngredient} />
            <section>
                <Search />
                <IngredientList ingredients={ingredients} onRemoveItem={onRemoveIngredient} />
            </section>
        </div>
    );
}

export default Ingredients;
