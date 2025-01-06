import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const [text, setText] = useState("Tampilkan");

    function handleLoadProduct() {
        setLoad((prevLoad) => {
            setText(prevLoad ? "Tampilkan" : "Tutup");
            return !prevLoad;
        });
    }

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch("/products.json");
                if (!response.ok) throw new Error("Failed to fetch products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        if (load) {
            console.info("Loading products...");
            fetchProduct();
        } else {
            setProducts([]); // Clear products when closed
        }
    }, [load]);

    return (
        <>
            <h1 className="">Product List</h1>
            <button className="" onClick={handleLoadProduct}>{text}</button>
            {load && products.length === 0 && <p>Loading products...</p>}
            {products.length > 0 ? (
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                load && <p>No products available.</p>
            )}
        </>
    );
}
