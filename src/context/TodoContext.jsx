import { createContext, useState } from "react";

const TodoContext=createContext()

export const TodoProvider=({children})=>{


    const [todo,settodo]=useState([])

    const [count,setcount]=useState(0)
  
    const [edit,setedit]=useState({todo:{},isedit:false})
   
    const increase=()=>{
      if(count===10){
        setcount(10)
      }
      else{
        setcount(count+1)
      }
    }
    const decrease=()=>{
      if(count===0)
      {
        setcount(0)
      }
      else{
      setcount(count-1)
    }
  
    }

    const [theam,settheam]=useState(false)
    console.log(theam);
    

    const changetheam=()=>{
      theam? settheam(true):settheam(false)
      console.log("theme");
      
    }
  
    const removeTodo=(Id)=>{
      settodo(todo.filter((item)=>item.Id!==Id))
      console.log(Id)
    }
  
   const addTodo=(text)=>{
    settodo([{id:crypto.randomUUID(),text: text},...todo])
   }
     
  const editTodo=(oldTodo)=>{
    setedit({todo:oldTodo,isedit:true})
  }
  const updatedTodo=(oldid,newtext)=>{
      settodo(todo.map((item)=>item.id===oldid?{id:oldid,text:newtext}:item))
      setedit({todo:{},isedit:false})
  }
    

    return <TodoContext.Provider value={{todo,count,edit,increase,decrease,addTodo,removeTodo,editTodo,updatedTodo, changetheam}}>
        {children}
    </TodoContext.Provider>
}


export default TodoContext