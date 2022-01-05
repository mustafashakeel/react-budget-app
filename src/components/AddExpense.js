import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
const AddExpense = (props) => {
    const { dispatch } = useContext(AppContext);


    const [name, setName] = useState('');
    const [cost, setCost] = useState('')

    console.log(" add expense state  name ", name, " cost ", cost);
    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
        setName('');
        setCost('');
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <h5> Add Expense</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />

                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" id="cost"
                        className="form-control"
                        value={cost}
                        onChange={(event) => {
                            console.log(" cost ", event);
                            setCost(event.target.value)
                        }}
                    />

                </div>
                <div className="col-sm">

                    <button type="submit" className="btn btn-primary mt-3">Add</button>

                </div>

            </div>
        </form>
    );

};
export default AddExpense;