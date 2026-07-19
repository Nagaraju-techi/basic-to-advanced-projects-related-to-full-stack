import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, editNote }) {
  if (notes.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
}

export default NoteList;