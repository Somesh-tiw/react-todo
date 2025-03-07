import { useEffect, useState } from "react";

const Form=({addTodo,edit})=>{
  console.log(edit)
     
   let [text,settext]=useState("")

    const handle=(e)=>{
         e.preventDefault();
        addTodo(text)
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