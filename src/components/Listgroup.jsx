import { useContext } from "react"
import ListItem from "./ListItem"
import TodoContext from "../context/TodoContext"
// import Form from "./ListItem"
const Listgroup=()=>{
    const {todo}=useContext(TodoContext)
return(
    <>
     <ul className='list-group my-2'>
       {
        todo.map((todo)=>(
            <ListItem  key={todo.Id} todo={todo}  />
            
        ))
    }
   
      </ul>
    </>
)
}
export default Listgroup