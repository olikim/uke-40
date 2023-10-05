

import { createProduct, fakeProduct } from "./features/products/createProducts"
import ProductCard from "./productCard"


export default function ProductList () {

    const products = Array.from(createProduct({ count: 10, fakeProduct }).values())
    
    return (
        <div className="flex flex-wrap flex-row gap-5 justify-center items-center">
            {products.map((product) => (
                <ProductCard key={product.id} {...product}/>
                ))}        
        </div>

    )
}