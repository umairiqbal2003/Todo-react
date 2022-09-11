import React from "react";
import { useState } from "react";



function Todo(){

const[todoItem,setTodoItem]= useState([]);
const[inputValue , setInputValue] = useState("");

const addTodo = ()=>{
  todoItem.push(inputValue);
  setTodoItem([...todoItem])
  setInputValue("");
}
const delTodo = (i)=>{
   todoItem.splice(i , 1);

   setTodoItem([...todoItem]);
}
const delAll = ()=>{
    setTodoItem([])
}


    return(
        <div className="background">
            <h1 className="heading">Todo App</h1>

        <div className="input-todo">
            <label htmlFor="todo">TODO :  </label>
            <input type="text" value={inputValue} placeholder="Enter Your Todo" onChange={(e)=>setInputValue(e.target.value)} />
            <button className="add-button" onClick={addTodo} > <i className="fa-solid fa-plus add-todo"></i> </button>
            <button className="delete-button" onClick={delAll} > <i className="fa-solid fa-trash delete-todo"></i></button>
        </div>
        <div className="result">
            {todoItem.map((todo,index)=>{
                return <li className="result-div" key={index}> {todo} <button onClick={()=>delTodo(index) }  ><i className="fa-solid fa-trash del-todo"></i></button></li>
            })}
        </div>
        </div>


    )
}

export default Todo;