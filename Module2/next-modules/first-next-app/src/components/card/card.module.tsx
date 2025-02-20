export interface ICard {
    id: string
    title?: string
    description?: string
    image?: string
    price?: number
}

export default function Card({ id, title, description, image, price }: ICard) {
    return (
        <div id={id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="rounded-md" src={image} />
            <div className="p-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="text-green-600 font-semibold mt-2">Rp {price}</p>
                <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
        </div>
    )
}
