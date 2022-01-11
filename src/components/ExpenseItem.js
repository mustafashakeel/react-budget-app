import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id
        });
    }
    return (
        <li className="list-group-item d-flex justify-content-between ">
            {props.name}
            <span > {props.cost}</span>

            <span onCLick={handleDeleteExpense} >Delete </span>

        </li>
    );

};
export default ExpenseItem;