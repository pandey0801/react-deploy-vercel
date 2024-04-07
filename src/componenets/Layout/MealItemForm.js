import classes from './MealItemForm.module.css'
import Input from '../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = props =>
{
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber = +enterAmount;

        if(enterAmount.trim().length=== 0 || 
        enterAmountNumber < 1 || 
        enterAmountNumber >5)
        {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enterAmountNumber);
        return;

    };

    return <from className={classes.form} onSubmit={submitHandler}>
        {/* <input / */}
        <Input label ="Amount" input={{
            id: 'amount',
            type: 'number',
            min: "1",
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ ADD</button>
        {!amountIsValid && <p>please enter a valid amount (1-5). </p>}
    </from>
};

export default MealItemForm