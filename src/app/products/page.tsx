"use client"
import ProductCard from "@/components/productCard";
import ProductList from "@/components/productList";

const productList = [
    {id: 1, title: "Produkt 1", category: "Elektronikk", price: 149},
    {id: 2, title: "Produkt 2", category: "Undertøy", price: 399}
];

export default function ProductsPage() {  
    return (
    <div>
        <ProductList />
    </div>
    )  
  }