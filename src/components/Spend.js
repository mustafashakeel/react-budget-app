import React,{useContext} from 'react';
import {AppContext} from '../context/AppContext';
const Spend = (props) => {
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
       
        return (total += item.cost);
    }, 0);
    return (
        <div className="alert alert-danger">
            <span> Spend $ {totalExpenses}</span>
        </div>
    );

};
export default Spend;