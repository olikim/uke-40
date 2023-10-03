import type { CreateProducts, FakeProduct } from "./types"

export const fakeProduct: FakeProduct = {
    id: () => getRandomId(),
    title: () => getRandomListItem(fakeTitles),
    category: () => getRandomListItem(fakeCategories),
    price: () => getRandomPrice()
}

const createProduct: CreateProducts = ({count, fakeProduct}) => {

    const products = new Map()

    for (let i = 0; i < count; i++) {
        const product = {
            id: fakeProduct.id(),
            title: fakeProduct.title(),
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