import React from 'react'

const ToDoListItem = (props) => {


    function handleClick() {
        props.onDelete(props.id)
    }



    return (

        <div className="col-md-6 align-item-center m-auto pb-2">
            <div className='d-flex'>
                <input type="text" id="disabledTextInput" className="form-control" placeholder={props.content} disabled />
                <button type="button" onClick={handleClick} className="btn-close fs-4 align-middle" aria-label="Close"></button>
            </div>
        </div>

    )
}

export default ToDoListItem