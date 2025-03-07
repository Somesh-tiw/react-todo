import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Listgroup from './components/Listgroup'



const App = () => {

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
  let [theam,settheam]=useState(false)
  const changetheam=()=>{
    theam? settheam(false):settheam(true)
  }

  const removeTodo=(Id)=>{
    settodo(todo.filter((item)=>item.Id!==Id))
    console.log(Id)
  }

 const addTodo=(text)=>{
  settodo([{id:crypto.randomUUID,text: text},...todo])
 }
   
const editTodo=(oldTodo)=>{
  setedit({todo:oldTodo,isedit:true})
}

  return (
     
    <>
    <Navbar/>
    <Form addTodo={addTodo} edit={edit} />
    <Listgroup todo={todo}  removeTodo={removeTodo}  editTodo={editTodo}/>
    <div className={theam?"container-fluid p-5 bg-dark text-light":"container-fluid p-5  "}>
      <h1 className='text-center my-3'>count={count}</h1>
       
        <button onClick={()=>increase()} className='btn btn-success ' >Increase</button>
        <button onClick={()=>decrease()} className='btn btn-danger  ' >Decrease</button>
        <button onClick={()=>changetheam()} className='btn btn-secondary ' >Change</button>
    </div>
    </>
  )
}

export default App