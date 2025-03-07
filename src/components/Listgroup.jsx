import ListItem from "./ListItem"
// import Form from "./ListItem"
const Listgroup=({todo,removeTodo,editTodo})=>{
    
return(
    <>
     <ul className='list-group my-2'>
       {
        todo.map((todo)=>(
            <ListItem  key={todo.Id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
            
        ))
    }
   
      </ul>
    </>
)
}
export default Listgroup