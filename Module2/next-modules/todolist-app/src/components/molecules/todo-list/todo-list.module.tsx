"use client"
import { useDispatch, useSelector } from 'react-redux'
import { sortTodo, searchTodo } from '@/utils/redux/todoSlice'
import { RootState } from '@/utils/store/store'

import TodoItem from '@/components/atomics/todo-item/todo-item.module'

export default function TodoList() {
    const { todos, search, sortByCompleted } = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()

    const filteredTodo = todos
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sortByCompleted ? Number(a.completed) - Number(b.completed) : 0)

    return (
        <div>
            <div className='mb-4 flex gap-2'>
                <input
                    type="text"
                    placeholder='Search todo ...'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(searchTodo(e.target.value))}
                    className='flex-1 p-2 border rounded'
                />
                <button
                    onClick={() => dispatch(sortTodo())}
                >
                    {sortByCompleted ? "Sort : Not Completed" : "Sort : Completed"}
                </button>
            </div>
            <ul className='space-y-2'>
                {
                    filteredTodo.length > 0 ? (
                        filteredTodo.map((todo, key) => <TodoItem key={key} todo={todo} />)) :
                        <p className='text-center text-gray-500'>Todos Not Available</p>
                }
            </ul>
        </div>

    )
}
