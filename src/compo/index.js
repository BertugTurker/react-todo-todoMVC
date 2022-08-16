import { useState, useEffect } from 'react';
import Form  from "./Form/index";
import List from "./Liste/index";
import Footer from "./Footer";

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
  
    useEffect(()=> {
      console.log(todos);
    }, [todos])
  
    return (
      <div className='todoapp'>
            
              <header className='header'>
              <h1>todos</h1>
              <Form addTodos={setTodos} todos={todos}/>
              </header>
            

            
            

            <List addTodos={setTodos} todos={todos} />
            
            <Footer todos={todos}/>
           

            
      </div>
    )
  }

  export default Todoes;