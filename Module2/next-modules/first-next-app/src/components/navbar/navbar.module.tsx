import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-screen h-20 bg-teal-700 p-5 flex fixed gap-5 justify-between items-center text-white text-semibold">
            <div className="my-3">
                <p className="font-semibold text-lg">JCWD-3204</p>
            </div>
            <div className="my-3 flex gap-x-5">
                <Link className="text-slate-100 hover:text-slate-300" href={'test-1'}>Test 1</Link>
                <Link className="text-slate-100 hover:text-slate-300" href={'test-2'}>Test 2</Link>
            </div>
        </nav>
    )
}
