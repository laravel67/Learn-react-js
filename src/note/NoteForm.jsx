import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContext";

// export default function NoteForm({addOnNote}) {
//     const [text, setText] = useState('');

//     function handleChange(e) {
//         setText(e.target.value);
//     }

//     function handleClick() {
//         setText('');
//         addOnNote(text);
//     }

//     return (
//         <>
//             <input className="" value={text} onChange={handleChange} />
//             <button className="" onClick={handleClick}>Add Note</button>
//         </>
//     )
// }

// Menggunakan Dispatch Context

export default function NoteForm() {
    const [text, setText] = useState('');
    const dispatch = useContext(NoteDispatchContext);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        setText('');
        dispatch({
            type: "ADD_NOTE",
            text:text
        });
    }

    return (
        <>
            <input className="" value={text} onChange={handleChange} />
            <button className="" onClick={handleClick}>Add Note</button>
        </>
    )
}