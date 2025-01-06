import { useEffect, useState } from "react";

export function useOnline() {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            setOnline(true)
        }

        function handleOffline() {
            setOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);
        };

    }, [])
    return online
}