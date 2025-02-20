import { useRouter } from "next/router"

export default function Navbar() {

    const router = useRouter()

    function navigate(pathname: string) {
        router.push(pathname)
    }

    return (
        <div className="w-screen h-20 bg-teal-700 p-5 flex fixed top-0 gap-5 justify-between items-center text-white text-semibold">
            <div className="my-3">
                <p className="font-semibold text-lg">JCWD-3204</p>
            </div>
            <div className="my-3 flex gap-x-5">
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('main')} >Main</span>
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('main/test-1')} >Test 1</span>
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('main/test-2')} >Test 2</span>
            </div>
        </div>
    )
}
