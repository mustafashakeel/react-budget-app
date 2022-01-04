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

    return (
        <div className="alert alert-secondary">
            {
                isEditing ? (<EditBudget />) :
                    (<ViewBudget budget={budget} handleEditClick={handleEditClick} />)
            }


        </div>
    );


};
export default Budget;