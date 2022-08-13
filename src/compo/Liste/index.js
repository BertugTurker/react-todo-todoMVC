import { useState } from "react";

function List({ todos }) {

  const checkTodo = (e) => {
    e.target.parentElement.parentElement.className == "a" ? e.target.parentElement.parentElement.className="completed" : e.target.parentElement.parentElement.className= "a";
    
  }

  const deleteTodo = (e) => {
     e.target.closest('.main').remove()
  }


  return (
    <ul className="todo-list">
        {
          todos.map((c, i)=> (
            <div className="main">
                <li key={i} className="a">
                  <div className="view">
                  <input type="checkbox" class="toggle" id={todos.id} onClick={checkTodo}/>
                  <label>{c.input}</label>
                  <button className="destroy" id={todos.id} onClick={deleteTodo}></button>
                  </div>
                </li>
            </div>
          ))
        }
      </ul>
  )
}

export default List