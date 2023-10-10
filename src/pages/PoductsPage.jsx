import { useEffect, useState } from "react";
import api from '../API/api'
import SearchBar from "../components/SearchBar";
import AllProducts from "../components/AllProducts";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        setLoading(true);

        const fetchAllProducts = async () => {
            try {
                const response = await api.allProducts();
                setProducts(response);
                console.log('Result: ', response);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch products data: ", error);
                setLoading(false);
            }
        }
        fetchAllProducts();
    }, [])

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredProducts(filtered)
    },[products])

    const handleSearch = (searchText) => {
        setSearchText(searchText);
    }


    return (
        <div>
            {loading ? (
                <p>Loading please wait..</p>
                
            ) : (
                <>
                <SearchBar onSearch={handleSearch}/>
                <div className="product-display">
                    {filteredProducts.length === 0 ? (
                        <p>No products found</p>
                    ) : (
                        <AllProducts products={filteredProducts} />
                )}
                </div>
            </>
                
            )}
        </div>
    )
}