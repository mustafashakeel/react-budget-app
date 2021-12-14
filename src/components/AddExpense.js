import React from 'react';
const AddExpense = (props) => {
    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <h5> Add Expense</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" />

                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" id="cost" className="form-control" />

                </div>
                <div className="col-sm">

                    <button type="submit" className="btn btn-primary mt-3">Add</button>

                </div>

            </div>
        </form>
    );

};
export default AddExpense;