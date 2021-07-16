import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-us', { month: 'long' });
    const day = props.date.toLocaleString('en-us', { day: '2-digit' });
    const year = props.date.getFullYear('en-us', { year: 'long' });

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-day'>{day}</div>
        </div>

    )
}

export default ExpenseDate;