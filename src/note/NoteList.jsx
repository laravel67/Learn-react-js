import Note from "./Note";

export default function NoteList({notes, onChange, onDelete}) {
    return <>
        <ul className="">
            {notes.map((note, index) => (
                <li className="" key={index}>
                    <Note note={note} onChange={onChange} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    </>
}