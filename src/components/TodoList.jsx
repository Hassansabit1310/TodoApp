import TodoItem from "./TodoItem"

const TodoList=({todosProps,onChangeHandler,delTodo})=>{

    return(
        <>
        <div>
            <ul>
            {todosProps.map(todo=>(<TodoItem key={todo.id} todoItemProp={todo} onChangeHandler={onChangeHandler} delTodo={delTodo}/>))}
            </ul>
          
        </div>
        </>
    )
}
export default TodoList