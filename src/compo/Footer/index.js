

function Footer({ todos }) {
    return (
        <footer className="footer">
            <meta property="todoDone" content="[count(todo where done)]"/>
            <meta property="todoLeft" content="[count(todo where !done)]"/>
            
            <span className='todo-count'>{todos.length} madde kaldI</span>
            
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
            
            <button class="clear-completed">bitenleri sil</button>
    </footer>
    )
}

export default Footer;