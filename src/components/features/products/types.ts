
export type FakeProduct = {
    id: () => string,
    title: () => string,
    category: () => string,
    price: () => number
}

export type Product = {
    id: string,
    title: String,
    category: string,
    price: number
}

export type CreateProductsParams = {
    count: number
    fakeProduct: FakeProduct
}

export type CreateProducts = (
    params: CreateProductsParams
) => Map<String, Product>