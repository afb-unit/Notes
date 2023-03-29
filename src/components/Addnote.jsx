import { useState } from "react";

const Addnote = ({ handleaddnote }) => {
  const [notetext, setnotetext] = useState("");
  const handlechange = (event) => {
    if (characterlimit - event.target.value.length >= 0) {
      setnotetext(event.target.value);
    }
  };

  const handlesaveclick = () => {
    if (notetext.trim().length > 0) {
      handleaddnote(notetext);
      setnotetext("");
    }
  };
  const characterlimit = 200;
  return (
    <div className="note new">
      <textarea
        onChange={handlechange}
        value={notetext}
        placeholder="Type to add note . . ."
        cols="10"
        rows="5"
      ></textarea>
      <div className="note-footer">
        <small className="limit">{characterlimit - notetext.length} Remaining</small>
        <button className="save" onClick={handlesaveclick}>
          Save
        </button>

      </div>
    </div>
  );
};

export default Addnote;
