import { useState } from "react";

export default function NoteForm({addOnNote}) {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        setText('');
        addOnNote(text);
    }

    return (
        <>
            <input className="" value={text} onChange={handleChange} />
            <button className="" onClick={handleClick}>Add Note</button>
        </>
    )
}