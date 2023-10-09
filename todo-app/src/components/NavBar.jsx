import {  useRef, useState } from "react"
import useonClickOutside from "./useonClickOutside"

const NavBar=()=>{
  const [dropdown,setDropDown]=useState(false)
  const ref=useRef()
  
    useonClickOutside(ref,dropdown,() => setDropDown(false))
    return(
        <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li ref={ref}> 
            <button onClick={()=>{setDropDown(prev=>!prev)}}>
              Services <span>&#8595;</span>
            </button>
          {dropdown && ( <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>) }
          </li>

        </ul>
      </nav>


    )
}
export default NavBar