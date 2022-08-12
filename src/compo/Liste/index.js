function List({ todos }) {
 
  return (
    <ul className="todo-list">
        {
          todos.map((c, i)=> (
            <div className="main">
                <li key={i} className="">
                  <div className="view">
                  <input type="checkbox" class="toggle" />
                  <label>{c.input}</label>
                  <button className="destroy"></button>
                  </div>
                </li>
            </div>
          ))
        }
      </ul>
  )
}

export default List