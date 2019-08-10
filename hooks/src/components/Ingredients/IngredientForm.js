import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const submitHandler = event => {
        const { onAddIngredient } = props;
        event.preventDefault();
        onAddIngredient({ title, amount, id: (Math.random() * 10000).toString() });
    };

    const onInputChange = (e, handler) => {
        handler(e.target.value);
    };

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={e => onInputChange(e, setTitle)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={e => onInputChange(e, setAmount)}
                        />
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
