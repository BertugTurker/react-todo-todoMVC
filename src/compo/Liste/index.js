import { useState } from "react";

function List({ addTodos, todos, form, setForm }) {

  const [name, setName] = useState("");
  const [todosnew, setTodosnew] = useState(todos)

  const checkTodo = (e) => {
    e.target.parentElement.parentElement.className === "a" ? e.target.parentElement.parentElement.className="completed" : e.target.parentElement.parentElement.className= "a";
    
  }

  const deleteTodo = (e) => {
     e.target.closest('.main').remove()
  }

  const changeTheName = (e) => {
    setName(e.target.value)
  }

  const submitEditedName = (e) => {
    
    e.target.parentElement.className= "a";
    // setForm({...form, input: name});
  
    
    // addTodos([...todos, form]);
    
    setTodosnew([...todosnew, todosnew[e.target.parentElement.id].input= name])
    console.log(todosnew)
    
  }


  return (
    <ul className="todo-list">
        {
          todosnew.map((c, i)=> ( 
            <div className="main">
                <li key={i} id={i} className="a" >
                  <div className="view">
                  <input type="checkbox" className="toggle" id={todosnew.id} onClick={checkTodo}/>
                  <label onDoubleClick={(e)=> e.target.parentElement.parentElement.className="editing"}>
                  {c.input}
                  </label>
                  <button className="destroy" id={todosnew.id} onClick={deleteTodo}></button>
                  </div>
                  <input className="edit" value={name} onBlur={submitEditedName} onChange={changeTheName}/>
                </li>
            </div>
          ))
        }
      </ul>
  )
}

export default List