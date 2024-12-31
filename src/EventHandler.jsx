export default function EventHandler() {
    const handleAlert=()=>{
        alert('Halllo ini adalah Handle Alert')
    }

    return <button className="" onClick={handleAlert}>Show Alert</button>
}