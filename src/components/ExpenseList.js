import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpenseList = (props) => {

    const expenses = [
        { id: 10, name: "Buy Gifts ", cost: 75 },
        { id: 11, name: "Dinner ", cost: 15 },
        { id: 12, name: "Buy Gas ", cost: 40 },
    ]
    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );

};
export default ExpenseList;