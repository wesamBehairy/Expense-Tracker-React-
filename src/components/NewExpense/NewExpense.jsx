import React from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (ExpenseData) => {
        const ExData = { ...ExpenseData, id: Math.random().toString() };
        props.onAddExpense(ExData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onsaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;