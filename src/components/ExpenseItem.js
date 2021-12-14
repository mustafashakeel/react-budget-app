import React from 'react';
const ExpenseItem = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between ">
            {props.name}
            <span > {props.cost}</span>

        </li>
    );

};
export default ExpenseItem;