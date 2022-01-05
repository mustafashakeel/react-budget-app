import React, { useState } from "react";


const EditBudget = (props) => {

    const [value, setValue] = useState(props.budget)
    return (

        <>
            <input type="text" className="form-control mr-3" onChange={(event) => setValue(event.target.value)} value={value} />
            <button type="button" className="btn btn-primary" onClick={() => props.handleSaveClick(value)}>Update</button>
        </>


    )
}
export default EditBudget;
