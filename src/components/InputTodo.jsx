const InputTodo=()=>{
    const onChangeHandler=(e)=>{
console.log(e.target.value);
    }
    return(
        <>
        
        <form>
            <input type="text"  placeholder="Add to do" onChange={onChangeHandler} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default InputTodo