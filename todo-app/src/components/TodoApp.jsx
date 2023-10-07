import Header from "@/components/Header"
import TodoLogic from "./TodosLogic"
import NavBar from "./NavBar"
import UncontrolledForm from "./UncontrolledForm"

const TodoApp=()=>{
    return(
        <>
        <Header/>
        <NavBar/>
        <TodoLogic/>
        <UncontrolledForm/>

        <h1>Hello threre</h1>
        </>
    )
}

export default TodoApp