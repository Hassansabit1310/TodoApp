const TodoItem=({todoItemProp,onChangeHandler,delTodo})=>{

 
    return(
        <>
      
        <li>
        <input type="checkbox" checked={todoItemProp.completed} onChange={()=>{onChangeHandler(todoItemProp.id)}} />
        <button onClick={()=>{delTodo(todoItemProp.id)}}>Delete</button>
            {todoItemProp.title}
            </li>
        
        </>
    )
}
export default TodoItem