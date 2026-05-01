import React from "react";

const NoteItem = (props) => {
  const { note, deleteNote, showAlert } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h5
              className="card-title mb-0"
              style={{
                maxWidth: "75%",
                wordWrap: "break-word",
              }}
            >
              {note.title}
            </h5>

            <div className="d-flex">
              <i
                className="fa-solid fa-trash mx-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteNote(note.id);
                  showAlert("Note deleted successfully", "danger");
                }}
              ></i>

              <i
                className="fa-regular fa-pen-to-square mx-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  showAlert("Note updated successfully", "success");
                }}
              ></i>
            </div>
          </div>

          <p className="card-text mt-2">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;