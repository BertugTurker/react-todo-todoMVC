import { useState, useEffect } from 'react';
import Form  from "./form/index";
import List from "./Liste/index";

function Todoes() {

    const [todos, setTodos] = useState([
      {
        input: "bert",
      }, {
        input: "tugba",
      }, {
        input: "jojo",
      }
    ]);
    //const [items, setItems] = useState(todos.length);
  
    useEffect(()=> {
      console.log(todos);
    }, [todos])
  
    return (
      <div className='todoapp'>
            <div>
              <header className='header'>
              <h1>todos</h1>
              <Form addTodos={setTodos} todos={todos}/>
              </header>
            </div>

            
            

            <List todos={todos} />
            
            
            <footer className="footer">
              <span className='span-count'>{todos.length} madde kalan</span>
              <ul className="filters">
              <li>
                <a class="" id="all">All</a>
              </li>
              <li>
                <a class="" id="active">Active</a>
              </li>
              <li>
                <a class="" id="completed">Completed</a>
              </li>
            </ul>
            <button class="">bitenleri sil</button>
            </footer>

            
      </div>
    )
  }

  export default Todoes;