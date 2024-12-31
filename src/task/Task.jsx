import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
    const [items, setItems] = useImmer([]);


    // function handleChange(e){
    //     setItem(e.target.value);
    // }

    // function handleClick(e) {
    //     e.preventDefault();
    //     setItems((draft) => {
    //         draft.push(item)
    //     })
    //     setItem("")
    // }

    function handleOnSubmit(item) {
        // e.preventDefault();
        setItems((draft) => {
            draft.push(item);
        });
    }

    return (
        <>
            {/* <h1 className="">Form Create Tast</h1>
            <form className="">
                <input className="" name="" value={item} onChange={handleChange} />
                <button className="" onClick={handleClick}>Add Task</button>
            </form>

            <ul className="">
                {items.map((item, index)=>(
                    <li className="" key={index}>{item}</li>
                ))}
            </ul> */}
            <TaskForm onSubmit={handleOnSubmit} />
            <TaskList items={items}/>

        </>
    )
}