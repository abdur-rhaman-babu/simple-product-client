import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:7000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("successfully deleted");
        }
      });
  };
  return (
    <div>
      <h1>Products:{products.length}</h1>
      {products.map((product) => (
        <p key={product._id}>
          {product.name}{" "}
          <button onClick={() => handleDelete(product._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Products;
