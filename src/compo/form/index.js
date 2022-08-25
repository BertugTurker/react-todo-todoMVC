import { useState, useEffect } from "react";

const initialFormValues = { input: ""};

function Form({ addTodos, todos }) {
  const [form, setForm] = useState(initialFormValues);
  
  useEffect(()=> {
    setForm(initialFormValues)
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({...form, input: e.target.value, isCompleted: false})
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.input === "") {
      return false
    };
    
    addTodos([...todos, form]);
  }

  return (
    <form onSubmit={onSubmit}>
    <div>
      <input
      className="new-todo"
      autoComplete="off"
      name='input'
      placeholder='do something!'
      value={form.input}
      onChange={onChangeInput}/>
    </div>
  </form>
  );
}

export default Form;
