// import { useState } from "react";
import { useImmer } from "use-immer";

const initialData = {
    name: "",
    message: ""
};
export default function ContactForm() {
    // const [contact, setContact] = useState(initialData);

    // function handleChangeName(e){
    //     setContact({
    //         ...contact,
    //         name:e.target.value
    //     })
    // }

    // function handleChangeMessage(e){
    //     setContact({
    //         ...contact,
    //         message:e.target.value
    //     })
    // }

    // Menggunakan Librari Immer
    const [contact, setContact] = useImmer(initialData);

    function handleChangeName(e){
        setContact(draft => {
            draft.name=e.target.value
        })
    }

    function handleChangeMessage(e){
        setContact(draft => {
            draft.message=e.target.value
        })
    }

    return (<>
            <h1 className="">Contac Form</h1>
        <form className="">
            <input type="text" className="" name="name" value={contact.name} onChange={handleChangeName} />
            <input type="text" className="" name="name" value={contact.message} onChange={handleChangeMessage}/>
        </form>
        <h1 className="">Contact Detail</h1>
        <p className="">Name: {contact.name}</p>
        <p className="">Mesagge: {contact.message}</p>

    </>)
}