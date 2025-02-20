import Button from "../button/button.module"

export interface ICard {
    id: string
    title?: string
    description?: string
    image?: string
    price?: number
}

export default function Card({ id, title, description, image, price }: ICard) {
    return (
        <div id={id} className="bg-white flex flex-col text-start shadow-md rounded-lg overflow-hidden">
            <img className="rounded-md w-full h-60" src={image} />
            <div className="p-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="text-green-600 font-semibold mt-2">Rp {price}</p>
                <Button
                    id="buy"
                    title="Buy Now"
                />
            </div>
        </div>
    )
}
