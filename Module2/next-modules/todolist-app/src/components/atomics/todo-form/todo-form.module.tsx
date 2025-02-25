"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "@/utils/redux/todoSlice"

export default function TodoForm() {

    const [text, setText] = useState<string>("")
    const dispatch = useDispatch()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-4 flex gap-2"
        >
            <input
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder="Add todo ..."
                className="flex-1 p-2 border rounded"
            />
            <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                type="submit"
            >
                Add
            </button>
        </form>
    )
}
