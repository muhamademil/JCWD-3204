import React from "react";

interface IButton {
    id: string;
    title?: string;
    children?: React.ReactNode
    onClick?: () => void
}

export default function Button({ id, title, onClick, children }: IButton) {
    return (
        <button id={id} className="w-full text-white bg-teal-600 hover:bg-teal-700 rounded-md text-center p-5" onClick={onClick}>
            {title}
            {children}
        </button>
    )
}
