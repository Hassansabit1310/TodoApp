import InputTodo from "./InputTodo"
import TodoItem from "./TodoItem"

const TodoList=({todosProps,onChangeHandler,delTodo,addToDo})=>{

    return(
        <>
        <div>
            <ul>
            {todosProps.map(todo=>(<TodoItem key={todo.id} todoItemProp={todo} onChangeHandler={onChangeHandler} delTodo={delTodo} addToDo={addToDo}/>))}
            </ul>
          
        </div>
        </>
    )
}
export default TodoList