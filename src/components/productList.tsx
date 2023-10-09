

import { createProduct, fakeProduct } from "./features/products/createProducts"
import ProductCard from "./productCard"


export default function ProductList () {

    const products = Array.from(createProduct({ count:7, fakeProduct }).values())
    
    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product) => (
                <ProductCard key={product.id} {...product}/>
                ))}        
        </div>

    )
}