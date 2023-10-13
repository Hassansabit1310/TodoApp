import { useState } from "react"

const InputTodo=({addToDo})=>{

    const  [title,setTitle]=useState('')
    const onChangeHandler=(e)=>{
setTitle(e.target.value)
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    addToDo(title)
}

    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="Add to do" value={title} onChange={onChangeHandler} />
            <button type="submit" >Submit</button>
        </form>
        </>
    )
}
export default InputTodo


