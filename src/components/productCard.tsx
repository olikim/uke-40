import { ProductCardProps } from "./features/products/types";

export default function ProductCard (props: ProductCardProps) {
    const { id, title, description, category, price } = props
    return (
        <article className="border border-solid border-gray-500 p-4 max-w-xs">
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
            <p>
                {price}.00 NOK
            </p>
            <span>{category}</span>   
        </article>
    )
}