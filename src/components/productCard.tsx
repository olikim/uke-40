import { ProductCardProps } from "./features/products/types";

export default function ProductCard (props: ProductCardProps) {
    const { id, title, description, category, price } = props
    


    return (
        <article className="flex max-w-md flex-col items-start space-y-4 rounded-xl bg-white p-6 shadow-md ">
            <div className="basis-1/2">
                <span className="leading-sm float-right inline-flex items-end rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-normal uppercase text-blue-gray-900 antialiased">
                    {category}
                </span> 
                <h2 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h2>
                <p className="font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p>
                <p className="mt-2 font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
                    {price}.00 NOK
                </p>
                <button className="mt-4 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Legg i handlekurv
                </button>
            </div>  
        </article>
    )
}
