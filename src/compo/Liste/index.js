import { useState } from "react";

function List({ addTodos, todos }) {

  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState("")
  
  const checkTodo = () => {
    isCompleted === "" ? setIsCompleted("completed") : setIsCompleted("") 
  }

  const deleteTodo = (e) => {
    addTodos(todos.filter(item=> item.input!==e.target.closest('.view').innerText));
  }

  

  const changeTheName = (e) => {
    setName(e.target.value);
    
  }

  const submitEditedName = (e) => {
    
    e.target.parentElement.className= "a";
    let newArr = [...todos];
    newArr[e.target.parentElement.id].input = name;

    addTodos(newArr);
  }
  

  const doubleDouble = (e) => {
    setName(e.target.closest('.view').innerText);
    e.target.parentElement.parentElement.className="editing"
  }


  return (
    <ul className="todo-list">
        {
          todos.map((c, i)=> ( 
            <div className="main" key={i}>
                <li key={i} id={i} className={isCompleted} >
                  <div className="view">
                      <input type="checkbox" className="toggle" id={todos.id} onClick={checkTodo}/>
                      <label onDoubleClick={doubleDouble}>
                        {c.input}
                      </label>
                      <button className="destroy" id={todos.id} onClick={deleteTodo}></button>
                  </div>
                  <input name="edit" className="edit" autoComplete="off" value={name} onBlur={submitEditedName} onChange={changeTheName}/>
                </li>
            </div>
          ))
        }
      </ul>
  )
}

export default List