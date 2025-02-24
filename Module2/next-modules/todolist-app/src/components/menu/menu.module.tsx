"use client"
import Button from "../button/button.module"
import { useRouter } from "next/navigation"

export default function Menu() {

    const router = useRouter()

    return (
        <div className="flex flex-col justify-center items-center p-3 bg-slate-200 w-full h-full">
            <h2 className="text-center text-blue-500 font-semibold">Module 2 - React Hooks</h2>
            <div className="w-full mx-10 p-3 rounded-md grid grid-cols-3 gap-5">
                <Button id="" onClick={() => router.push('/hooks/state')} title="Example of useState" />
                <Button id="" onClick={() => router.push('/hooks/ref')} title="Example of useRef" />
                <Button id="" onClick={() => router.push('/hooks/reducer')} title="Example of useReducer" />
                <Button id="" onClick={() => router.push('/hooks/memo')} title="Example of useMemo" />
                <Button id="" onClick={() => router.push('/hooks/callback')} title="Example of useCallback" />
                <Button id="" onClick={() => router.push('/hooks/context')} title="Example of useContext" />
                <Button id="" onClick={() => router.push('/hooks/effect')} title="Example of useEffect" />
            </div>
        </div>

    )
}
