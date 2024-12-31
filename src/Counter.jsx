import { useState } from "react";

export default function Counter() {
    const [counter, setCounter]=useState(0)
    // let counter = 0;

    function handleCounter (){
        // counter++;
        // console.log(counter);
        setCounter(counter + 1)
        console.log(counter);
        
        
    };

    return <div className="">
        <button className="" onClick={handleCounter}>Count</button>
        <h1 className="">Counter: {counter}</h1>
    </div>
}