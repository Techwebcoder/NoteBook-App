import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllZTIxNjZhY2Q0NzgxOWIxNDE0ODJiIn0sImlhdCI6MTc3NzIxNjU2OX0.iWAJ2O7hCTyxK-vWQQjLIbcjNoB5_JfoMDViEoiVngQ",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllZTIxNjZhY2Q0NzgxOWIxNDE0ODJiIn0sImlhdCI6MTc3NzIxNjU2OX0.iWAJ2O7hCTyxK-vWQQjLIbcjNoB5_JfoMDViEoiVngQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllZTIxNjZhY2Q0NzgxOWIxNDE0ODJiIn0sImlhdCI6MTc3NzIxNjU2OX0.iWAJ2O7hCTyxK-vWQQjLIbcjNoB5_JfoMDViEoiVngQ",
      },
    });

    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjllZTIxNjZhY2Q0NzgxOWIxNDE0ODJiIn0sImlhdCI6MTc3NzIxNjU2OX0.iWAJ2O7hCTyxK-vWQQjLIbcjNoB5_JfoMDViEoiVngQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }

    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;