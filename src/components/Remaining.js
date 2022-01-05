import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = (props) => {
    const { expenses, budget } = useContext(AppContext);

    console.log(" expenses ", expenses, " budget , ", budget);
    const totalExpenses = expenses.reduce((total, item) => {

        return (total += item.cost);
    }, 0);
    // console.log(" total Expense ", JSON.stringify(totalExpenses));

    const alertType = totalExpenses > budget ? "alert alert-danger" : "alert alert-success";

    return (
        <div className={alertType}>
            <span> Remaining $ {budget - totalExpenses}</span>
        </div>
    );

};
export default Remaining;