import './Expenses.css';
import Card from './../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {

    const [filteredYear, setfilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((ex) => {
        return ex.date.getFullYear().toString() === filteredYear;
    });


    return (
        <Card className='expenses'>

            <ExpensesFilter selected={filteredYear} onchangeFilter={filterChangeHandler} />

            <ExpensesChart expenses={filteredExpenses} />

            <ExpensesList items={filteredExpenses} />

        </Card>
    )
}
export default Expenses;