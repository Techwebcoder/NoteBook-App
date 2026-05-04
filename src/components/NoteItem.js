import React from "react";

const NoteItem = (props) => {
  const { note, deleteNote, showAlert, updateNote, mode } = props;

  const handleDelete = () => {
    deleteNote(note._id);
    showAlert("Note deleted successfully", "danger");
  };

  return (
    <div className="col-md-3">
      <div
        className={`card my-3 note-card ${
          mode === "dark" ? "bg-dark text-light border-light" : "bg-light text-dark"
        }`}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="card-title mb-0" style={{ maxWidth: "75%" }}>
              {note.title}
            </h5>

            <div className="d-flex">
              <button className="btn btn-sm p-0 mx-2" onClick={handleDelete}>
                <i
                  className={`fa-solid fa-trash ${
                    mode === "dark" ? "text-light" : "text-dark"
                  }`}
                ></i>
              </button>

              <button
                className="btn btn-sm p-0 mx-2"
                onClick={() => updateNote(note)}
              >
                <i
                  className={`fa-regular fa-pen-to-square ${
                    mode === "dark" ? "text-light" : "text-dark"
                  }`}
                ></i>
              </button>
            </div>
          </div>

          <p className="card-text mt-2">{note.description}</p>

          <p className="card-text">
            <small className={mode === "dark" ? "text-light" : "text-muted"}>
              {note.tag}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;