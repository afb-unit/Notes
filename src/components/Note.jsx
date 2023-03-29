// import {MdDeleteForever} from 'react-icons/md'

const Note = ({id,text,date,handledeletenote}) => {
  return (
  <div className="note" >
   <textarea id="tex" cols="30" rows="6">{text}</textarea>

    <div className="note-footer">
        <small className="dateor">{date}</small>
        <i className="fa-solid fa-trash" onClick={()=>handledeletenote(id)}></i>
    </div>
  </div>
  )
};

export default Note;
