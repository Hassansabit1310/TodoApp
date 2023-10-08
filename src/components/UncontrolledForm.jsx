import { useState } from "react";


 const UncontrolledForm=()=>{
const [state,setState]=useState({
    fname:'',
    lname:'',
    message:'',
    carBrand:'',
    isChecked: false,
    gender:'',
    price: 0
});
  
const handleSubmit=(e)=>{
e.preventDefault()
console.log(state);
}

    const handleOnhange=(e)=>{
        const value= e.target.type==="checkbox"?e.target.checked:e.target.value

   
 setState((state) => ({
    ...state,
    [e.target.name]: value
  }))
 console.log(e.target.value);
 console.log(state);
  }
  const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];
  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={state.fname} name="fname" onChange={handleOnhange} />
            <input type="text" value={state.lname} name="lname" onChange={handleOnhange} />
            <textarea value={state.message} name="message" onChange={handleOnhange} />
            <label> Car Brand:
                <select name="carBrand" value={state.carBrand} onChange={handleOnhange} >
                <option value={""} disabled>
            --Pick a car brand--
          </option>
{carBrandOptions}
                </select>
            </label>
            <label>
                <input type="checkbox" checked={state.isChecked} name="isChecked" onChange={handleOnhange} />
            </label>
        
          <label> 
            <input type="radio" name="gender" value="male" checked={state.gender==="male"} onChange={handleOnhange}/>{" "}
Male         </label>

<label> 
            <input type="radio" name="gender" value="female" checked={state.gender==="female"} onChange={handleOnhange}/>{" "}
Female         </label>
<label> <input type="range" name="price" min='0' max="50" value={state.price} onChange={handleOnhange}/> </label>
<button type="submit">Submit</button>

        </form>
        <h5>my name is : {state.fname} {state.lname}</h5>
        <h5>your message:{state.message}</h5>
        <h5>i want a {state.carBrand}</h5>
        <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
        <h5>Gender: {state.gender}</h5>
        <h5>Price:{state.price}</h5>
        </>
    )
 }
 export default UncontrolledForm    