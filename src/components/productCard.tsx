import { ProductCardProps } from "./features/products/types";

export default function ProductCard (props: ProductCardProps) {
    const { id, title, category, price } = props
    return (
        <article>
            <h2>{title}</h2>
            <span>{category}</span>
            <p>{price}</p>

        </article>
    )
}