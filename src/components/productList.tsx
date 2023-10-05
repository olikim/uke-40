

import { createProduct, fakeProduct } from "./features/products/createProducts"
import ProductCard from "./productCard"


export default function ProductList () {

    const products = Array.from(createProduct({ count: 1, fakeProduct }).values())
    
    return (
        <>
        {products.map((product) => (
            <ProductCard key={product.id} {...product}/>
          ))}
        </>

    )
}