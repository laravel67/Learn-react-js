import { useRef, useState } from "react";
import GuestBoookInput from "./GuestBookInput";

export default function GuestBoook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const nameInput = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
        setMessage("");

        nameInput.current.focus();

        alert(`name ${name}, Message ${message}`);
    }

    return (
        <>
            <h1 className="">Buku Tamu</h1>
            <form className="">
                <GuestBoookInput ref={nameInput} setName={setName} name={name}/>
                {/* <label htmlFor="name">Name</label>
                <input className="" ref={nameInput} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> */}
                <br />
                <label htmlFor="message">Mesagge</label>
                <textarea className="" type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className="" onClick={handleSubmit}>Simpan</button>
            </form>
        </>
    )
}
