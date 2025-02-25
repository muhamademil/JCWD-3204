import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    search: string;
    sortByCompleted: boolean
}

const initialState: TodoState = {
    todos: [],
    search: "",
    sortByCompleted: false
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        toggleTodo(state, action: PayloadAction<number>) {
            const todo = state.todos.find((item) => item.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        searchTodo(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        sortTodo(state) {
            state.sortByCompleted = !state.sortByCompleted
        }
    }
})

export const { addTodo, toggleTodo, removeTodo, searchTodo, sortTodo } = todoSlice.actions
export default todoSlice.reducer