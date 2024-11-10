interface IProducts {
    id: number
    img: string
    desc: string
    title: string
    rate: string
    price: string
    category: string
    imgCollection: string[]
}

export const Products: IProducts[] = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1600852306771-c963331af110?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc21ldGljc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Luxury Lipstick Set",
        desc: "A premium lipstick set crafted for sophisticated beauty lovers. Enriched with nourishing ingredients, it provides smooth application and lasting color.",
        rate: "4.5",
        price: "$199.99",
        category: "cosmetics",
        imgCollection: [
            "https://images.unsplash.com/photo-1730196343100-1d3e4e5dd492?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1730066799485-1a5cfc70f627?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1730235533513-b3c56991982d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1727731482610-0ce076b252e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
        ]
    },
    {
        id: 2,
        img: "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0aWNzfGVufDB8fDB8fHww",
        title: "Premium Face Cream",
        desc: "A luxurious face cream designed to hydrate and restore the skin. With advanced anti-aging properties, it leaves the skin feeling soft, radiant, and youthful.",
        rate: "4.5",
        price: "$199.99",
        category: "cosmetics",
        imgCollection: [
            "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0aWNzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1730066799485-1a5cfc70f627?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1730235533513-b3c56991982d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1727731482610-0ce076b252e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
        ]
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1730956473717-b1bb69fc595e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
        title: "Elegant Women's Dress",
        desc: "This elegant women's dress combines classic style with modern flair. Perfect for any occasion, it offers comfort and sophistication with its beautiful design.",
        rate: "4.5",
        price: "$199.99",
        category: "women’s",
        imgCollection: [
            "https://images.unsplash.com/photo-1730956473717-b1bb69fc595e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1730066799485-1a5cfc70f627?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1730235533513-b3c56991982d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1727731482610-0ce076b252e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
        ]
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1728949687207-e92da7b5538a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
        title: "Men’s Leather Jacket",
        desc: "A stylish men’s leather jacket designed for comfort and durability. Perfect for both casual and semi-formal occasions, its sleek design ensures a timeless look.",
        rate: "4.5",
        price: "$199.99",
        category: "men’s",
        imgCollection: [
            "https://images.unsplash.com/photo-1728949687207-e92da7b5538a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1730066799485-1a5cfc70f627?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1730235533513-b3c56991982d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1727731482610-0ce076b252e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
        ]
    }
];
