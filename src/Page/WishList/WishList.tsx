import { useSelector } from "react-redux"
import WishListCard from "./WishListCard"
import { RootState } from "../../RTK/store"

const WishList = () => {
    const wishlist = useSelector((state: RootState) => state.WishCard)

    return (
        <div className="flex  gap-3 p-3">

            {wishlist.map((el) => {
                return (
                    <WishListCard
                        key={el.id}
                        img={el.img}
                        id={el.id}
                        title={el.title}
                        price={el.price}
                        Product={el}
                    />
                )
            })}
            {!wishlist.length && <p className="p-5 flex w-full justify-center">There's no Products </p>}

        </div>
    )
}

export default WishList
