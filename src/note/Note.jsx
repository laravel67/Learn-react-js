import { useState } from "react";

export default function Note({note, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let component;
    function handleChangeText(e) {
        const newNote = { ...note, text: e.target.value };
        onChange(newNote);
    }
    if (isEditing) {
        component = (
            <>
                <input className="" value={note.text} onChange={handleChangeText} />
                <button className="" onClick={()=>setIsEditing(false)}>save</button>
                <button className="" onClick={()=>setIsEditing(false)}>Batal</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button className="" onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    
    function handleChangeDone(e) {
        const newNote = { ...note, done: e.target.checked };
        onChange(newNote);
    }

    return <>
        <label>
            <input className="" type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button className="" onClick={()=>onDelete(note)}>Delete</button>
        </label>
    </>
}