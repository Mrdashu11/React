import React from 'react'
import { useState, useEffect } from 'react'
function Todo() {
    const [inputValue, setinputValue] = useState('')
    const [todos, setTodos] = useState([])
    const [editId , setEditId] = useState(null)


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))

    }, [todos])

    function addTodo() {
        if (inputValue !== '') {
            if(editId !== null){
                setTodos(todos.map(todo => {
                    if(todo.id === editId){
                        return {...todo , text : inputValue}
                    }
                    return todos
                }))
                setinputValue('')  

            } else {
                const newTodo = {
                    id: new Date().getTime(),
                    text: inputValue
                }
                setTodos([...todos, newTodo])
                setinputValue('')  
            }
            
        }
    }

    function EditTodo(id){
        const todoeditId = todos.find(todo => todo.id === id)
        setEditId(id)
        setinputValue(todoeditId.text)
    }

    function Deletetodo(id) {
        setTodos(
            todos.filter((todos) => (
                todos.id !== id
            ))
        )
    }
    return (
        <>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </head>
            <center>

                <div>
                    <h1>TODO APP</h1>
                    <input type='text' placeholder='Enter Your Task' value={inputValue} onChange={(e) => setinputValue(e.target.value)}>
                    </input>
                    <button onClick={addTodo}>Add Task</button>

                    <ul>
                        {todos.map((el) => (
                            <>
                            <center>
                                <li key={el.id}>{el.text}</li>&nbsp;
                                <button className='butoon' onClick={()=>Deletetodo(el.id)}>Delete&nbsp;&nbsp;<i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                <button className='butoon' onClick={()=>EditTodo(el.id)}>Edit&nbsp;&nbsp;<i class="fa fa-pencil" aria-hidden="true"></i></button>
                                {/* <buttonn> */}
                                </center>
                            </>
                        ))}
                    </ul>
                </div>
            </center>
        </>
    )
}


export default Todo