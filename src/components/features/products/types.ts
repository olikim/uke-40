
export type FakeProduct = {
    id: () => string
    title: () => string
    description: () => string
    category: () => string
    price: () => number
}

export type Product = {
    id: string
    title: string
    description: string
    category: string
    price: number
}

export type CreateProductsParams = {
    count: number
    fakeProduct: FakeProduct
}

export type CreateProducts = (
    params: CreateProductsParams,
) => Map<string, Product>

export type ProductCardProps = {
    id: string
    title: string
    description: string
    category: string
    price: number
  }
  
