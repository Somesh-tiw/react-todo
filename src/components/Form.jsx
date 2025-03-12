import { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

const Form=()=>{

  const {addTodo,edit,updatedTodo}=useContext(TodoContext)
  // console.log(edit)
     
   let [text,settext]=useState("")

    const handle=(e)=>{
         e.preventDefault();
         if(edit.isedit===false){
           addTodo(text)
         }
         else{
          updatedTodo(edit.todo.id,text)
         }
        settext("")
    };
    useEffect(()=>{
       settext(edit.todo.text)
    },[edit])


    return(
        <form onSubmit={(e)=>handle(e)}>
        <input className='form-control rounded-0' 
        type="text" 
        placeholder='Enter Text'
        onChange={(e)=>settext(e.target.value)}
        value={text}
        />

        <button className='btn btn-success rounded-0 my-2 w-100'>Save</button>
      </form>

    )
}
export default Form