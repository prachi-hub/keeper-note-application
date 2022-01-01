import React, { useState } from "react";

function Notes(props) {
    const [displayForm, setForm] = useState(false);
    const [note, setNote] = useState(props);
    // const [time, setTime] = useState(() => {
    //     setTime(new Date());
    // });

    function handleDelete() {
        props.onDelete(props.num);
    }

    function handleEdit(e) {
        e.preventDefault();
        const title = e.target.children[0].value;
        const desc = e.target.children[1].value;
        props.onEdit(props.id, title, desc);

        setForm(false)
    }

    const onChangeValue = (e) => {
        setNote(e.target.value);
    }

    

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <form
                onSubmit={handleEdit}
                className={`${displayForm ? "show" : "hide"}`}
                style={{ position: "fixed", bottom: "53%", height: "28%", right: "32.5%", zIndex: "1" }}
            >
                <input placeholder="title" onChange={onChangeValue} value={note.title} />
                <input placeholder="desc" onChange={onChangeValue} value={note.desc} />
                <button style={{ position: "relative", top: "31%", color: "white", width: "15%", backgroundColor: "#f5ba13", borderRadius: "10%", right: "37%" }}>Update</button>
            </form>
            {/* {time} */}
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={() => setForm(!displayForm)}>Edit</button>

        </div>
    );
}

export default Notes;