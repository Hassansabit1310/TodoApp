import { useState } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const TodoLogic=()=>{
  const [todos,setTodos]= useState( [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ])

  const delTodo=(id)=>{
   setTodos(
    [
      ...todos.filter((todo)=>{
        return todo.id!=id
      }),
    ]
   )
  }
   console.log(todos);
  const onChangeHandler=(id)=>{

    
    setTodos(
        (prevState)=>
        {
            console.log(prevState);
           return prevState.map((todo)=>{
                if(todo.id===id){
                    return {
                        ...todo,
                        completed:!todo.completed
                    }
                }
                return todo
            })
        }

        
    )
  }
    return(
        <>
        <div>
        <InputTodo/>
        <TodoList todosProps={todos} setTodos={setTodos} onChangeHandler={onChangeHandler} delTodo={delTodo}/>
        </div>
        
        </>
    )
}
export default TodoLogic