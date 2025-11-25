import { useState, useEffect } from 'react';

function Home() {
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    function handleTodoClick(id) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(data => setSelectedTodo(data));
    }

    return (
        <div>
             {selectedTodo && (
                <div>
                    <h2>Details</h2>
                    <p>Title: {selectedTodo.title}</p>
                    <p>Completed: {selectedTodo.completed ? 'Yes' : 'No'}</p>
                    <p>User ID: {selectedTodo.userId}</p>
                </div>
            )}
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span onClick={() => handleTodoClick(todo.id)} style={{cursor: 'pointer', color: 'blue'}}>
                            {todo.title}
                        </span>
                    </li>
                ))}
            </ul>

            {selectedTodo && (
                <div>
                    <h2>Details</h2>
                    <p>Title: {selectedTodo.title}</p>
                    <p>Completed: {selectedTodo.completed ? 'Yes' : 'No'}</p>
                    <p>User ID: {selectedTodo.userId}</p>
                </div>
            )}
        </div>
    );
}

export { Home };
