import React, { useState } from "react";
import NotesForm from "./Components/NotesForm";
import NotesList from "./Components/NotesList";

const App = () => {
  const [task, setTask] = useState([]);

  // Add new note
  const addNote = (note) => {
    setTask((prevTask) => [...prevTask, note]);
  };

  // Delete note
  const deleteNote = (idx) => {
    setTask((prevTask) => prevTask.filter((_, index) => index !== idx));
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <NotesForm addNote={addNote} />
      <NotesList task={task} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
