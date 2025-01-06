export default function GuestBoookInput({ref, name, setName}) {
    return (
        <>
            <label htmlFor="name">Name</label>
                <input ref={ref} className="" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}