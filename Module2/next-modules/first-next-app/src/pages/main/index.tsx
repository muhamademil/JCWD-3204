import Link from 'next/link'
import Button from '@/components/button/button.module'

export default function Main() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <p className='font-semibold'>Welcome to Module 2 - JCWD3204</p>
            <div className='flex gap-x-10 my-10'>
                <Button
                    id='module-test-1'
                >
                    <Link href={"main/test-1"}>Module Test 1</Link>
                </Button>
                <Button
                    id='module-test-2'
                >
                    <Link href={"main/test-2"}>Module Test 2</Link>
                </Button>
            </div>
        </div>
    )
}
