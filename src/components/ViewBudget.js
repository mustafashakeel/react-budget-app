import React, { useContext, useState } from 'react';

const ViewBudget = (props) => {

    return (
        <div className="alert alert-secondary">
            <span> Budget ${props.budget}</span>
            <button type="button" className="btn btn-primary" onClick={props.handleEditClick} >Edit</button>
        </div>
    );

};
export default ViewBudget;