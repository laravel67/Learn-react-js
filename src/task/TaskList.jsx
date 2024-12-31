export default function TaskList({ items }) {
    
    return (<>
        <ul className="">
                {items.map((item, index)=>
                    <li key={index}>{item}</li>
                )}
            </ul>
    </>)
}