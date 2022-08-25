import { useState, useEffect } from 'react';
import Form  from "./Form/index";
import List from "./Liste/index";
import Footer from "./Footer";

function Todoes() {
    const [todoFilter, setTodoFilter] = useState(0)
    const [tiklama, setTiklama] = useState(false)
    const [todos, setTodos] =
    useState( JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) :
      [
      {
        input: "bert",
        isCompleted: true,
      }, {
        input: "tugba",
        isCompleted: true,
      }, {
        input: "jojo",
        isCompleted: false,
      }
    ]);
  
    useEffect(()=> {
      console.log(todos);
      localStorage.setItem('todos', JSON.stringify(todos));
      if (todos.filter((e)=>e.isCompleted === false).length > 0) {
        setTiklama(false)
      } else setTiklama(true)
    }, [todos])

    let foot=null;
    if (todos.length>0) {
      foot = (
        <Footer todos={todos} addTodos={setTodos} todoFilter={todoFilter} setTodoFilter={setTodoFilter}/>  
      )
    }

    const allDone = () => {
      setTiklama(tiklama === false ? true : false)
    }

    const selectAll = () => {
      if (tiklama === true) {
        setTodos(todos.map(e => ({...e, isCompleted: true})))
      } else {
        setTodos(todos.map(e => ({...e, isCompleted: false})))
      }
    }

    let toggleAll = null;
    if (todos.length>0) {
      toggleAll = (
          <div>
          <input id="toggle-all" className="toggle-all" type="checkbox" checked={tiklama} onChange={selectAll}/>
          <label htmlFor="toggle-all" onClick={allDone}>all done</label>
          </div>
        )
    }

    return (
      <div className='todoapp'>    
        <header className='header'>
          <h1>to...do</h1>
          <Form addTodos={setTodos} todos={todos}/>
        </header>
        <section>
          {toggleAll}
          <List addTodos={setTodos} todos={todos} todoFilter={todoFilter}/>
        </section>
        {foot}
      </div>
    )
  }

  export default Todoes;