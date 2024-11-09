import HotCard from "./HotCard";

interface Product {
    id: number;
    image: string;
    title: string;
    rate: number;
    price: number;
}

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
    return (
        <article className="flex flex-col gap-3">
            <h1 className="Hot-Title">{title}</h1>
            {items.map((item) => (
                <HotCard
                    key={item.id}
                    IMG={item.image}
                    Name={item.title}
                    Price={item.price}
                />
            ))}
        </article>
    );
};

export default ProductList;
