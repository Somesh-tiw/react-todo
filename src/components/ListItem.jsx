const ListItem=({todo,removeTodo ,editTodo})=>{
    console.log(editTodo)
    return(
        <>
        <li className='list-group-item rounded-0'>
        <p className='text-secondary'>{todo.id}</p>
        <h1> {todo.text}</h1>
        <span className='float-end'>
          <button onClick={()=>editTodo(todo)} className='btn btn-sm btn-warning rounded-0 mx-1'>Edit</button>
          <button  onClick={()=>removeTodo(todo.Id)} className='btn btn-sm btn-danger  rounded-0 mx-1' >Delete</button>
        </span>
      </li>
      </>
    )
}
export default ListItem