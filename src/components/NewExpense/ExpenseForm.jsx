import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [item , setItem] = useState({
    //     title : '',
    //     amount: '',
    //     date: ''
    // });

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
        // setItem({ ...item,[e.target.name]: e.target.value });
        // setItem( (pre)=>{ return {  ...pre , [e.target.name]: e.target.value } } )
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        // console.log(data);
        props.onsaveExpenseData(data);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        name="title"
                        type='text'
                        value={title}
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        name="amount"
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        name="date"
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>


    )

}

export default ExpenseForm;