import { useState } from "react";

function List({ addTodos, todos }) {

  const [name, setName] = useState("");
  
  const checkTodo = (e) => {
    e.target.parentElement.parentElement.className === "" ?
    e.target.parentElement.parentElement.className = "completed" :
    e.target.parentElement.parentElement.className = "" ;
    let newArrr = [...todos];
    newArrr[e.target.parentElement.parentElement.id].isCompleted === true ?
    newArrr[e.target.parentElement.parentElement.id].isCompleted = false :
    newArrr[e.target.parentElement.parentElement.id].isCompleted = true;
    addTodos(newArrr);
  }

  const deleteTodo = (e) => {
    addTodos(todos.filter(item => item.input!==e.target.closest('.view').innerText));
  }

  const changeTheName = (e) => {
    setName(e.target.value);
  }

  const submitEditedName = (e) => {
    let newArr = [...todos];
    newArr[e.target.parentElement.id].input = name;
    addTodos(newArr);
    
    newArr[e.target.parentElement.id].isCompleted === true ?
    e.target.parentElement.className = "completed" :
    e.target.parentElement.className = "";
  }
  
  const doubleDouble = (e) => {
    setName(e.target.closest('.view').innerText);
    e.target.parentElement.parentElement.className="editing";
  }

  return (
    <ul className="todo-list">
        {
          todos.map((c, i)=> ( 
            <div className="main" key={i}>
                <li key={i} id={i} className={c.isCompleted === true ? "completed" : ""}>
                  <div className="view">
                      <input type="checkbox" className="toggle" id={todos.id} checked={c.isCompleted} onChange={checkTodo}/>
                      <label onDoubleClick={doubleDouble}>
                        {c.input}
                      </label>
                      <button className="destroy" id={todos.id} onClick={deleteTodo}></button>
                  </div>
                  <input name="edit" className="edit" autoComplete="off" value={name} onBlur={submitEditedName} onChange={changeTheName} autoFocus />
                </li>
            </div>
          ))
        }
      </ul>
  )
}

export default List