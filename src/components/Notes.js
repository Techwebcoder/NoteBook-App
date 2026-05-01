import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, deleteNote, editNote } = context;

  return (
    <div className="row my-3">
      <h2>Your Notes</h2>

      {notes.map((note) => {
        return (
          <NoteItem
            key={note._id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
            showAlert={props.showAlert}
          />
        );
      })}
    </div>
  );
};

export default Notes;