interface IProps {
    img: string
    name: string
    price: number
    quantity: number
}
export default function ProductCard(props: IProps) {
    const { img, name, price, quantity } = props

    return (
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-stretch object-center" src={img} alt={name} />
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{name}</span>
                <span className="float-right text-gray-400">{quantity}x</span>
                <p className="mt-auto text-lg font-bold">$ {price}</p>
            </div>
        </div>
    )
}
