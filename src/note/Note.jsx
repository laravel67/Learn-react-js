import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContext";

// export default function Note({note, onChange, onDelete}) {
//     const [isEditing, setIsEditing] = useState(false);
//     let component;
//     function handleChangeText(e) {
//         const newNote = { ...note, text: e.target.value };
//         onChange(newNote);
//     }
//     if (isEditing) {
//         component = (
//             <>
//                 <input className="" value={note.text} onChange={handleChangeText} />
//                 <button className="" onClick={()=>setIsEditing(false)}>save</button>
//                 <button className="" onClick={()=>setIsEditing(false)}>Batal</button>
//             </>
//         )
//     } else {
//         component = (
//             <>
//                 {note.text}
//                 <button className="" onClick={() => setIsEditing(true)}>Edit</button>
//             </>
//         )
//     }
    
//     function handleChangeDone(e) {
//         const newNote = { ...note, done: e.target.checked };
//         onChange(newNote);
//     }

//     return <>
//         <label>
//             <input className="" type="checkbox" checked={note.done} onChange={handleChangeDone} />
//             {component}
//             <button className="" onClick={()=>onDelete(note)}>Delete</button>
//         </label>
//     </>
// }

// Menggunakan Note Dispath Context

export default function Note({note}) {
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useContext(NoteDispatchContext)
    
    let component;
    function handleChangeText(e) {
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            text: e.target.value
        })
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
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            text: e.target.checked
        })
    }

    function handleDelete() {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        })
    }

    return <>
        <label>
            <input className="" type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button className="" onClick={handleDelete}>Delete</button>
        </label>
    </>
}