import React from 'react'

export interface NewsArticle {
    author: string
    title: string
    description: string
    urlToImage: string
    onClick: () => void
}
export default function Card({ author, title, description, urlToImage, onClick }: NewsArticle) {
    return (
        <div
            onClick={onClick}
            className='max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-slate-200'>
            <img src={urlToImage !== "" ? urlToImage : "https://i.pinimg.com/736x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"} alt="news" />
            <div className='p-4 flex flex-col gap-y-5'>
                <h2 className='text-xl font-bold mb-2 text-slate-200'>{title}</h2>
                <p className='text-md font-semibold text-slate-200'>{description}</p>
                <p className='text-md font-medium text-slate-200'>{author}</p>
            </div>
        </div>
    )
}
