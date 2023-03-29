import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Notelist from "./components/Notelist";
import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setnotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "Hello",
    //   date: "3/04/2016",
    // },
  ]);

  const addnote = (text) => {
    const date = new Date();
    const newnote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    // open current array of notes and add new note at end
    const newnotes = [...notes, newnote];
    setnotes(newnotes);
  };

  const deletenote = (id) => {
    const newnotes = notes.filter((note) => note.id !== id);
    setnotes(newnotes);
  };

  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    const savenote = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savenote) {
      setnotes(savenote);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);


  return (
    <div className="container">
      <Header />
      <Search handlesearchnote={setsearchtext} />
      <Notelist
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchtext)
        )}
        handleaddnote={addnote}
        handledeletenote={deletenote}
      />
    </div>
  );
}

export default App;
