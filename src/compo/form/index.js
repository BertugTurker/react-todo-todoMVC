import { useState, useEffect } from "react";


const initialFormValues = { input: ""};
function Form({ addTodos, todos }) {
  const [form, setForm] = useState(initialFormValues);
  

  useEffect(()=> {
    setForm(initialFormValues);
    
  }, [todos]);

  const onChangeInput = (e) => {
    
    setForm({...form, [e.target.name]: e.target.value})
    
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.input === "") {
      return false
    };
    
    addTodos([...todos, form]);

    
  };

  return (
    <form onSubmit={onSubmit}>
    <div >
      <input
      className="new-todo"
      autoComplete="off"
      name='input'
      placeholder='yapilacak'
      value={form.input}
      onChange={onChangeInput}/>
    </div>
    <div>
      <button></button>
    </div>
    
  </form>
  );
}

export default Form;
