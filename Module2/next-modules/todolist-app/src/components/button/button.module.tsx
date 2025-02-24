"use client"
interface IButton {
    id: string;
    title: string;
    onClick: () => void
}

export default function Button({ id, title, onClick }: IButton) {
    return (
        <button
            id={id}
            className="w-full h-20 p-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold"
            onClick={onClick}
        >
            {title}
        </button>
    )
}
