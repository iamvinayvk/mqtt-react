import React from 'react';

const AddButton=(props)=>{
    return(
        <div className="button-add">
            <button onClick={()=>props.click()}>+ Add Device</button>
        </div>
    )

    
}
export default AddButton;