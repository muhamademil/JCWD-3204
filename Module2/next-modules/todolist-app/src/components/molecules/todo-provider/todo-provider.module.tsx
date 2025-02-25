"use client"
import { Provider } from "react-redux"
import { store } from "@/utils/store/store"

interface IProvider {
    children?: React.ReactNode
}
export default function TodoProvider({ children }: IProvider) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
