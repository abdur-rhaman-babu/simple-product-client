import { useLoaderData } from "react-router-dom";

const Products = () => {
    const products = useLoaderData()
    return (
        <div>
            <h1>Products:{products.length}</h1>
        </div>
    );
};

export default Products;