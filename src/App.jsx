import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Listgroup from './components/Listgroup'
import TodoContext, { TodoProvider } from './context/TodoContext'
import ThemeContext from './context/ThemeContext'




const App = () => {

const {changetheam,theam} = useContext(ThemeContext)


  return (
     
    <TodoProvider>
    <Navbar/>
    <Form   />
    <Listgroup />
    <div className={theam?"container-fluid p-5 bg-dark text-light":"container-fluid p-5  "}>
    {/* <div className=" bg-dark container-fluid p-5"> */}
      <h1 className='text-center my-3'></h1>
       
        <button onClick={()=>increase()} className='btn btn-success ' >Increase</button>
        <button onClick={()=>decrease()} className='btn btn-danger  ' >Decrease</button>
        <button onClick={()=>changetheam()} className='btn btn-secondary ' >Change</button>
    </div>
    </TodoProvider>
  )
}

export default App