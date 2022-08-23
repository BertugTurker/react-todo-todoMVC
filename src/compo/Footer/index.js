

function Footer({ addTodos, todos }) {

    const deleteAll = (e) => {
        addTodos(todos.filter(item => item.isCompleted === false))
    }

    let clearButton = null;
    if (todos.filter(item => item.isCompleted === true).length > 0) {
        clearButton = (
            <button
                className="clear-completed"
                onClick={deleteAll}>
                bitenleri sil
            </button>
        );
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
            {clearButton}
    </footer>
    )
}

export default Footer;