import React from "react"
import SingleProduct from "../components/SingleProduct";

export default function AllProducts({ products }) {
    return (
        <div className="products">
            <ul>
                {products.map(product => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </ul>
        </div>
    )
}