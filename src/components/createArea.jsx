import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        desc: ""
    });

    function handleChange(event) {
        
        const { name, value } = event.target;

        setNote(preNote => {
            return {
                ...preNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        const id = Math.floor(Math.random() * 100);
        const notes = {
            ...note,
            id
          };
        props.onAdd(notes);
        setNote({
            title: "",
            desc: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
            
                <textarea name="desc" value={note.desc} onChange={handleChange} placeholder="Take a note..." rows="3"></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;