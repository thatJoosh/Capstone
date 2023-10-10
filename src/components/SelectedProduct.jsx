import React, { useEffect, useState } from 'react'
import api from '../API/api'
import { useParams } from 'react-router-dom';

export default function SelectedProduct() {
    const [product, setProduct] = useState(null);
    const {productId} = useParams();

    useEffect(() => {
        const fetchSelectedProduct = async () => {
            try {
                const productData = await api.singleProduct(productId);
                console.log("Product Data: ", productData);
                setProduct(productData);
            } catch (error) {
                console.error("Uh oh, error fetching selected product: ", error.message);
            }
        }
        fetchSelectedProduct();
    }, [productId])

    if (!product) return <div>Loading please wait...</div>;
    return (
        <div className='product-details'>
            <div>
            <h2>{product.title}</h2>
            <br />
            <b>${product.price} </b>
            <br />
            <p>{product.description} </p>
            <br />
            <p>Rating: {product.rating.rate} ({product.rating.count} ratings)</p>
            </div>
            <div className='product-details-img' >
            <img src={product.image} alt={product.title} />
            </div>
        </div>
    )
}