import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }



    return (<>
        <h1 className="">Coun: {count}</h1>
        <button className="" onClick={handleCount}>Counter</button>
    </>)
}