import { useState } from "react"

export default function TaskForm({onSubmit}) {
    const [item, setItem] = useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        onSubmit(item);
        setItem("");
    }

    return (
        <>
        <h1 className="">Form Create Tast</h1>
            <form className="">
                <input className="" name="" value={item} onChange={handleChange} />
                <button className="" onClick={handleClick}>Add Task</button>
            </form>
    </>
    )
}