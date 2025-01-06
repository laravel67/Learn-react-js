import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NoteContext } from "./NoteContext";

// export default function NoteList({notes, onChange, onDelete}) {
//     return <>
//         <ul className="">
//             {notes.map((note, index) => (
//                 <li className="" key={index}>
//                     <Note note={note} onChange={onChange} onDelete={onDelete}/>
//                 </li>
//             ))}
//         </ul>
//     </>
// }

// Mennggunakan UseContext
export default function NoteList() {
    const notes = useContext(NoteContext);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);
    

    const notesSearch = useMemo(() => {
        console.info("Pencarian Notes")
        return notes.filter(note => note.text.includes(search))
    }, [notes, search]);

    function handleSeacrh(){
        console.info("Search");
        setSearch(searchInput.current.value);
    }

    return <>
        <ul className="">
            <input className="" ref={searchInput} placeholder="pencarian..." />
            <button className="" onClick={handleSeacrh}>Cari</button>
            {notesSearch.map((note, index) => (
                <li className="" key={index}>
                    <Note note={note}/>
                </li>
            ))}
        </ul>
    </>
}