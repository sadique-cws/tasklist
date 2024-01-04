"use client"

import { useState } from "react";
import InsertTask from "./InsertTask";

const Todo = () => {

    const [list, setList] = useState([]);


    const handleDelete = (id) => {
        setList(list.filter(item => item.id != id))
    }

    const onAdd = (newTask, setNewTask) => {
        setList([...list, {
            id: list.length + 1,
            task: newTask,
            isDone: false
        }])

        setNewTask("");
    }

    const onDone = (id) => {
        let newList = list.map((item) => {
            if(item.id == id){
                item.isDone = true
            }
            return item

        })

        setList(newList)
    }


    return (
        <div className="bg-black flex-1 h-screen flex justify-center items-center">
            <div className="w-1/3 bg-white p-3 rounded-2xl">
                <InsertTask onAdd={onAdd} />

                <div className="flex-1 py-3">
                    <ul>
                        {
                            list.map((item, index) => (
                                <li className="text-2xl flex justify-between mb-1" key={index}>
                                    <span className="">{item.id}. {(item.isDone) ? <del>{item.task}</del> : item.task}</span>
                                    <span className="flex gap-2">
                                        <button type="button" className="bg-red-500 text-white px-2 py-1 cursor-pointer hover:bg-red-800" onClick={() => handleDelete(item.id)}>X</button>
                                       
                                       {(!item.isDone) && <button type="button" onClick={() => onDone(item.id)} className="bg-teal-500 text-white px-2 py-1 cursor-pointer hover:bg-teal-800">✔</button>}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;