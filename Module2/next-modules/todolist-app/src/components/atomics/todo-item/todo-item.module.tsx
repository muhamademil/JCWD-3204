"use client"
import { useDispatch } from "react-redux"
import { toggleTodo, removeTodo } from "@/utils/redux/todoSlice"

interface TodoItemProps {
    todo: {
        id: number,
        text: string,
        completed: boolean
    },
}

export default function TodoItem({ todo }: TodoItemProps) {

    const dispatch = useDispatch()

    return (
        <div className="flex justify-between items-center p-2 border rounded bg-white">
            <span className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}>
                {todo.text}
            </span>
            <div className="flex gap-x-3">
                <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={() => dispatch(toggleTodo(todo.id))}>{todo.completed ? "Unmark" : "Mark"}</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </div>
        </div>
    )
}
