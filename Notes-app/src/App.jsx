import { useState,useEffect } from "react";
import NoteForm from './components/NoteForm';
import NoteItem from './components/NoteItem';
import NoteList from './components/NoteList';


function App(){
  const [notes,setNotes]=useState([]);
  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem("notes"));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);
  useEffect(()=>{
    localStorage.getItem("notes",JSON.stringify(notes));
  },[notes]);

  const addNote=(note)=>{
    setNotes([...notes,{id:Date.now(),...note}]);
  };

  const deleteNote=(id)=>{
    setNotes(notes.filter((note)=>note.id!=id));

  }
  const editNote=(id,updatedNote)=>{
    setNotes(
      notes.map((note)=>
        note.id===id?{...note,...updatedNote}:note

      )
    );
  };


  return (
     <div className="container">
      <h1>Notes App</h1>

      <NoteForm addNote={addNote} />

      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );

}

export default App;