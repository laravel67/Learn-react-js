// import { useImmer } from "use-immer";
import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
// import { useReducer } from "react";

let id = 0;
const initialNotes = [
    {
        id: id++,
        text: "Learn HTML",
        done: false
    },
    {
        id: id++,
        text: "Learn CSS",
        done: false
    },
    {
        id: id++,
        text: "Learn JAVASCRIPT",
        done: false
    },
    {
        id: id++,
        text: "Learn PHP",
        done: false
    },
    {
        id: id++,
        text: "Learn GO",
        done: false
    },
    {
        id: id++,
        text: "Learn PYTHON",
        done: false
    },
    
    
]

// function noteReducer(notes, action) {
//     switch (action.type) {
//         case "ADD_NOTE":
//             return [
//                 ...notes, {
//                     id: id++,
//                     text: action.text,
//                     done:false
//                 }
//             ]
//         case "CHANGE_NOTE":
//             return notes.map((note) => (
//                 note.id === action.id ? { ...note, text: action.text, done: action.done } : note
//             ));
//         case "DELETE_NOTE":
//             return notes.filter(note=>note.id !==action.id)
//         default:
//             return notes;
//     }
// }

function noteReducerImmer(draft, action) {
    if (action.type==='ADD_NOTE') {
        draft.push({
            id: Date.now(),
            text: action.text,
            done:false,
        })
    } else if(action.type==='CHANGE_NOTE') {
        const index = draft.findIndex(note => note.id === action.id);
        draft[index].text = action.text;
        draft[index].done = action.done;
    }else if(action.type==='DELETE_NOTE') {
        const index = draft.findIndex(note => note.id === action.id);
        draft.splice(index, 1);
    }
}

export default function NoteApp() {
    // const [notes, setNotes] = useImmer(initialNotes);
    
    // function handleAddNote(text) {
    //     setNotes((draft) => {
    //         draft.push({
    //             id: id++,
    //             text: text,
    //             done:false,
    //         })
    //     })
    // }

    // function handleChangeNote(note) {
    //     setNotes((draft)=> {
    //         const index = draft.findIndex(item => item.id === note.id);
    //         draft[index] = note;
    //     })
    // }

    // function handleDeleteNote(note) {
    //     setNotes((draft) => {
    //         const index = draft.findIndex(item => item.id===note.id);
    //         draft.splice(index, 1);
    //     })
    // }

    const [notes, dispatch] = useImmerReducer(noteReducerImmer, initialNotes)
    
    function handleAddNote(text) {
        dispatch({
            type: 'ADD_NOTE',
            text:text
       })
    }

    function handleChangeNote(note) {
        dispatch({
            type: 'CHANGE_NOTE',
            id: note.id,
            text: note.text,
            done:note.done
        })
    }

    function handleDeleteNote(note) {
        dispatch({
            type: "DELETE_NOTE",
            id:note.id
       })
    }




    return (
        <div>
            <h1>Note App</h1>
            <NoteForm addOnNote={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )


}

