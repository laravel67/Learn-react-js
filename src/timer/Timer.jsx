import { useRef } from "react";
import { useState } from "react";

export default function Time() {
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);

    const timer = useRef(null);

    function handlerStart() {
        setStart(Date.now());
        setNow(Date.now());

        timer.current=setInterval(() => {
            setNow(new Date().getTime()); 
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
    }

    return (
        <>
            <h1 className="">Waktu : {now - start} MS</h1>
            <button className="" onClick={handlerStart}>Mulai</button>
            <button className="" onClick={handleStop}>Stop</button>
        </>
    )
}