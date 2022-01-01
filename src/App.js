import React, { useState } from 'react';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Notes from "./components/notes";
import CreateArea from "./components/createArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(preNotes => {
      return [...preNotes, newNote]
    })
  }

  function deleteNote(id) {
    setNotes(preNotes => {
      return preNotes.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id, title, desc) {
    console.log(id);
    const tobeUpdated = notes.find((singleNote) => singleNote.id === id);
    tobeUpdated.id = id;
    tobeUpdated.title = title;
    tobeUpdated.desc = desc;
    setNotes([...notes]);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((noteItems, id) => {
          return <Notes key={noteItems.id} num={id} id={noteItems.id} title={noteItems.title} desc={noteItems.desc} onDelete={deleteNote} onEdit={editNote} />
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
