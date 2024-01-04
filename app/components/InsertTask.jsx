"use client"

import { useState } from "react"

export default function InsertTask({onAdd}){

    const [newTask, setNewTask] = useState("");

    
    
    return (
        <div className="flex gap-2">
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="border border-teal-900 rounded py-2 px-3 flex-1" placeholder="Enter any Task e.g Buy a milk"/>
            <button type="button" className="bg-teal-500 px-3 py-2 rounded" onClick={(() => onAdd(newTask, setNewTask))}>Add</button>
        </div>
    )
}