import { useState } from "react";
import {v4 as uuid} from 'uuid';
import './style.css'


function App(){

    const [input, setInput] = useState('');
    const [todo,setTodo] = useState([]);
    const [message,setMessage] = useState('');
    const [editId, setEditId] = useState(null);

    const handleInputChange = (e) =>{
        setInput(e.target.value);
        setMessage('');
    }

    const handleAddClick = () =>{
        if(input.trim() === ''){
            setMessage("please enter something");
            return;
        }
        if (editId) {
            // Update existing todo
            const updatedTodos = todo.map(todo =>
                todo.id === editId ? { ...todo, input } : todo
            );
            setTodo(updatedTodos);
            setEditId(null);
        } else {
            // Add new todo
            setTodo([...todo, { id: uuid(), input }]);
        }
        
        setInput('');
        setMessage('');
    }

    const handledelete = (id)=> {
        const update = todo.filter(todo => todo.id !== id);
        setTodo(update);
    }

    const handleEdit = (id) => {
        const itemToEdit = todo.find(item => item.id === id);
        setInput(itemToEdit.input);
        setEditId(id);
    };
    return (
        <>
            <h1>ToDo - List</h1>
            <input type="text" value={input} onChange={handleInputChange} placeholder="Enter what you want add"/>
            <button onClick={handleAddClick}>Add</button>

            {/* Show message if exists */}
            {message && <p style={{ color: 'red' }}>{message}</p>}

            <div>
            <h3>My ToDo - List</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {
                    todo.map(todo =>
                        <li className="box" key={todo.id} >
                            <span>{todo.input}</span>
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                            <button onClick={() => handledelete(todo.id)}>delete</button>
                        </li>
                    )
                }
            </ul>
</div>

        </>
    )
}

export default App;