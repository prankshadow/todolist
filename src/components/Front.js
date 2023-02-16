import React, { useState } from 'react'


const Front = (props) => {

    const[note, setNote] = useState({
        content: ""
    });

    function handleChange(event) {
       const {name, value} = event.target;

       setNote(preNote => {
        return {
            ...preNote,
            [name]: value
        }
       });
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            content: ""
        })
        event.preventDefault();
    }

    return (
        <>
            <div>
                <h1 className='heading text-center pt-5'>To Do List App </h1>
            </div>
            <div>
                <div className="input-group px-5 pb-5">
                    <button type="button" className="btn btn-secondary fs-5 rounded-start" disabled>Enter the task:</button>
                    <input type="text"
                        className="form-control rounded-end"
                        name="content"
                        value={note.content}
                        onChange={handleChange}
                        placeholder="Add ToDoList Item"
                    />
                    <button type="button" onClick={submitNote} className="btn btn-success fs-5">Add Task</button>
                </div>
            </div>


        </>
    )
}

export default Front