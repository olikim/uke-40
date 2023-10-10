
import React from "react"
import { createProduct, fakeProduct } from "./features/products/createProducts"
import ProductCard from "./productCard"


export default function ProductList () {

    const products = Array.from(createProduct({ count:7, fakeProduct }).values())
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-10">
            {products.map((product) => (
                <ProductCard key={product.id} {...product}/>
                ))}        
        </div>

    )
}