"use client"
import Button from "@/components/atomics/button/button.module"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Swal from "sweetalert2"

export default function Menu() {

    const router = useRouter()
    const type = Cookies.get("type")

    console.log("type : ", type)

    function navigate(route: string) {
        if (type === "default") {
            Swal.fire({
                title: 'Permission denied',
                text: 'You need upgrade to VIP member!',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/package-plan')
                }
            })
        } else {
            router.push(route)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center p-3 bg-slate-200 w-full h-full">
            <h2 className="text-center text-blue-500 font-semibold">Module 2 - React Hooks</h2>
            <div className="w-full mx-10 p-3 rounded-md grid grid-cols-3 gap-5">
                <Button id="" onClick={() => navigate('/hooks/state')} title="Example of useState" />
                <Button id="" onClick={() => navigate('/hooks/ref')} title="Example of useRef" />
                <Button id="" onClick={() => navigate('/hooks/reducer')} title="Example of useReducer" />
                <Button id="" onClick={() => navigate('/hooks/memo')} title="Example of useMemo" />
                <Button id="" onClick={() => navigate('/hooks/callback')} title="Example of useCallback" />
                <Button id="" onClick={() => navigate('/hooks/context')} title="Example of useContext" />
                <Button id="" onClick={() => navigate('/hooks/effect')} title="Example of useEffect" />
            </div>
        </div>

    )
}
