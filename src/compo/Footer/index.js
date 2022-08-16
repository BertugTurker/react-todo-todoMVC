

function Footer({ addTodos, todos }) {

    const deleteAll = (e) => {
        addTodos(todos.filter(item=> item.input !== (e.target.parentElement.parentElement.className = "completed").innerText))
    }

    return (
        <footer className="footer">
            <meta property="todoDone" content="[count(todo where done)]"/>
            <meta property="todoLeft" content="[count(todo where !done)]"/>
            
            <span className='todo-count'>{todos.length} madde kaldi</span>
            
            <ul className="filters">
                <li>
                    <a href="#/" className="" id="all">All</a>
                </li>
                <li>
                    <a href="#/active" className="" id="active">Active</a>
                </li>
                <li>
                    <a href="#/completed" className="" id="completed">Completed</a>
                </li>
            </ul>
            
            <button className="clear-completed" onClick={deleteAll}>bitenleri sil</button>
    </footer>
    )
}

export default Footer;