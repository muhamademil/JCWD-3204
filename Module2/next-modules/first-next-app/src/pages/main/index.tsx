import Link from 'next/link'

export default function Main() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <p className='font-semibold'>Welcome to Module 2 - JCWD3204</p>
            <div className='flex gap-x-10 my-10'>
                <button className='p-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md'>
                    <Link href={"main/test-1"}>Module Test 1</Link>
                </button>
                <button className='p-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md'>
                    <Link href={"main/test-2"}>Module Test 2</Link>
                </button>
            </div>
        </div>
    )
}
