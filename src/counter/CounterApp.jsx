import { useState } from "react";
import Counter from "../counter/Counter";


export default function CounterApp() {
    const [show2, setShow2] = useState();

    function handleChange(e) {
        setShow2(e.target.checked);
    }

    return (
        <div className="">
            <Counter />
            <br/>
            {show2 && <Counter />}
            <input className="" type="checkbox" onChange={handleChange} />Tampilkan Conter 2
        </div>
    )
}