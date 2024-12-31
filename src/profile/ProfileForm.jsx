export default function ProfileForm({name, setName}) {
    function handleChange(event) {
        setName(event.target.value)
    }

    return (<>
        <h1 className="">Profile Form</h1>
        <input type="text" className="" value={name} onChange={handleChange} />
    </>)
}