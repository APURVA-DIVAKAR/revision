import React from 'react'
import { useEffect, useState } from 'react';

export default function ToDo() {
    const [task,setTask] = useState("");
    const [list,setList] = useState([]);
    
    const handleAdd = (e) =>{
        if(task.trim() === ""){
            alert("Please Enter Valid Input")
            return;
        }
         e.preventDefault();
        const item = {
            todo : task.trim(),
            id : Math.floor(Math.random() * 1000000),
            completed : false
        }
       
        setList([...list,item]);
        setTask("");
    }

    const toggleCheck = (id) => {
        setList(
            list.map((t)=>{
                if(t.id===id){
                    return {
                        ...t,
                        completed : !t.completed,
                    }
                }
                else{
                    return t;
                }
            })
        )
    }

    const handleDelete = (id) => {
        setList(
            list.filter(t => id!==t.id)
        )
    }

  return (
    <div className='main'>
        <form onSubmit={handleAdd}>
            <input type="text" placeholder='Enter To Do' title='Task' value={task} onChange={(e)=>setTask(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        <ul>
            {list.map((t) =>{
                return <li key={t.id}>
                    <input type="checkbox" onChange={()=>toggleCheck(t.id)} />
                    <span className={t.completed ? "strikeThrough" : ""} ><b>{t.todo}</b></span>
                    <button onClick={() => handleDelete(t.id)}>Delete</button>
                </li>
            })}
        </ul>
    </div>
  )
}
