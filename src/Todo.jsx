export default function Todo({ text, isCompleted, isDeleted }) {
    // if (isDeleted) {
    //     return null
    // }else if (isCompleted) {
    //     return <li><del>{text}</del></li>
    // } else {
    //     return <li>{text}</li>
    // }

    if (isDeleted) {
        return null
    } else {
        return <li>
            {isCompleted ? <del>{text}</del>: text}
      </li>  
    }


}