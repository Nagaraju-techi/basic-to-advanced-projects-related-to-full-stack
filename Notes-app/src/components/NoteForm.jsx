import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }

    addNote({ title, content });

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="5"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;