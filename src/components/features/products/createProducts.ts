import type { CreateProducts, FakeProduct } from "./types"

export const fakeProduct: FakeProduct = {
    id: () => getRandomId(),
    title: () => getRandomListItem(fakeTitles),
    description: () => getRandomListItem(fakeDescriptions),
    category: () => getRandomListItem(fakeCategories),
    price: () => getRandomPrice()
}

export const createProduct: CreateProducts = ({count, fakeProduct}) => {

    const products = new Map()

    for (let i = 0; i < count; i++) {
        const product = {
            id: fakeProduct.id(),
            title: fakeProduct.title(),
            description: fakeProduct.description(),
            category: fakeProduct.category(),
            price: fakeProduct.price()
        }

        products.set(`product-${i}` , product)
    }

    return products

}


// functions used to generate a fake product
const getRandomId = () => {
    return Math.random().toString(36).slice(2)
}

const fakeTitles: string [] = [
    'Sleek Widget',
    'Gizmo Deluxe',
    'Tech Gadget',
    'Super Widgetizer',
    'Mega Gizmo',
    'Innovative Gizmo',
    'Ultimate Widget',
    'Smart Gizmo',
    'Precision Widget',
    'Epic Gizmo'
]

const fakeCategories: string [] = [
    'Electronics',
    'Clothing',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Toys & Games',
    'Beauty & Personal Care',
    'Books',
    'Health & Wellness',
    'Automotive',
    'Pet Supplies'
]

const fakeDescriptions: string [] = [
    "Wireless noise-canceling headphones with immersive sound",
    "Compact coffee maker for on-the-go brewing",
    "Multi-functional blender for smoothies and food processing",
    "Smartwatch with fitness tracking and heart rate monitor",
    "Portable power bank with fast charging capability",
    "Eco-friendly reusable water bottle with a built-in fruit infuser",
    "Smart thermostat for energy-efficient home temperature control",
    "Foldable drone with HD camera for aerial photography",
    "Stylish laptop backpack with built-in USB charging port",
    "LED smart bulbs that can be controlled via a mobile app"
]

const getRandomListItem = <T>(items: T[]) => {
        // Generate a random index within the array's length.
        const randomIndex = Math.floor(Math.random() * items.length)
        // Return the random item from the array.
        return items[randomIndex]
}

const getRandomPrice = () => {
    const randomPrice = Math.floor(Math.random() * (2000 - 100 + 1)) + 100
    return randomPrice
} 