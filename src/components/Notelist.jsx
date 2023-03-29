import Addnote from "./Addnote";
import Note from "./Note";

const Notelist = ({ notes, handleaddnote, handledeletenote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handledeletenote={handledeletenote}
        />
      ))}
      <Addnote handleaddnote={handleaddnote} />
    </div>
  );
};

export default Notelist;
