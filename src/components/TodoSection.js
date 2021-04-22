import React from 'react'
import './components.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { useState } from 'react'


const TodoSection = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: 'meet with boss',
            isCompleted: false,
        },
        {
            id: 2,
            todo: 'make lunch',
            isCompleted: false,
        },
        {
            id: 3,
            todo: 'go to bike servicing',
            isCompleted: false,
        },
    ]);

    const addTodo = (todo) =>{     
        const newId = todos.length + 1;
        const newTodo = {id: newId, todo: todo, isCompleted: false,};
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    }

    const removeTodo = (id) =>{
        console.log('remove id', id);
        setTodos(todos.map((todo)=> todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo) )
        
    }
    
    return (
        <div className="todo_section">
            <p style={{marginBottom: 20}}>Todo List</p>
            <AddTodo addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoSection
