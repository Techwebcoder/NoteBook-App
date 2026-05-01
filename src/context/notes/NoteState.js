import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "69f37834a36ac73482722f94",
      user: "69ee2166acd47819b141482b",
      title: "My hero Academia",
      description:
        "A young boy want to be a hero who has initially no powers and he gets the power from one for all hero and with the help can he be hero",
      tag: "Anime that is interesting and fantastic",
      date: "2026-04-30T15:41:40.100Z",
      __v: 0,
    },
    {
      _id: "69f378a0a36ac73482722f95",
      user: "69ee2166acd47819b141482b",
      title: "Solo leveling",
      description:
        "A man is weak with low class of power and during a danger he gets a power from the system that is the dark monarch and he tries to protect everyone with the help of the powers",
      tag: "Interesting and emotional with the MC mass power",
      date: "2026-04-30T15:43:28.423Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    const note = {
      _id: Date.now().toString(),
      user: "69ee2166acd47819b141482b",
      title: title,
      description: description,
      tag: tag,
      date: new Date().toISOString(),
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = (id, title, description, tag) => {
    const newNotes = notes.map((note) => {
      if (note._id === id) {
        return {
          ...note,
          title: title,
          description: description,
          tag: tag,
        };
      }

      return note;
    });

    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;