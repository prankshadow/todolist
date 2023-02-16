import { useState } from 'react';
import './App.css';
import Front from './components/Front';
import ToDoListItem from './components/ToDoListItem';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Front
        onAdd={addNote}
      />
      {notes.map((noteItem, index) => {
        return <ToDoListItem
          key={index}
          id={index}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}

    </div>
  );
}

export default App;
