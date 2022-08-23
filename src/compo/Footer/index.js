

function Footer({ addTodos, todos }) {

    const deleteAll = (e) => {
        addTodos(todos.filter(item => item.isCompleted === false))
    }

    return (
        <footer className="footer">
            
            
            <span className='todo-count'>{todos.filter(item => item.isCompleted === false).length} madde kaldi</span>
            
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