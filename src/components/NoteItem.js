import React from "react";

const NoteItem = (props) => {
  const { note, deleteNote, showAlert, updateNote } = props;

  const handleDelete = () => {
    deleteNote(note._id);
    showAlert("Note deleted successfully", "danger");
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h5
              className="card-title mb-0"
              style={{ maxWidth: "75%", wordWrap: "break-word" }}
            >
              {note.title}
            </h5>

            <div className="d-flex">
              <button
                type="button"
                className="btn btn-sm p-0 mx-2"
                onClick={handleDelete}
              >
                <i className="fa-solid fa-trash"></i>
              </button>

              <button
                type="button"
                className="btn btn-sm p-0 mx-2"
                onClick={() => updateNote(note)}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          </div>

          <p className="card-text mt-2">{note.description}</p>

          <p className="card-text">
            <small className="text-muted">{note.tag}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;