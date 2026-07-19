import { useState } from "react";

function NoteItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    editNote(note.id, { title, content });
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default NoteItem;