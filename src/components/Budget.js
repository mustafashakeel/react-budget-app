import React, { useContext, useState } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { budget, dispatch } = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false)
    const handleEditClick = () => {
        setIsEditing(true);

    }
    const handleSaveClick = (value) => {

        setIsEditing(false);
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        })
    }

    return (
        <div className="alert alert-secondary">
            {
                isEditing ? (<EditBudget budget={budget} handleSaveClick={handleSaveClick} />) :
                    (<ViewBudget budget={budget} handleEditClick={handleEditClick} />)
            }


        </div>
    );


};
export default Budget;