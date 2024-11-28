import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedProduct = useLoaderData()
    
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const product = {name, price}
        console.log(product)
    }
    return (
    <div>
      <h3>Update {loadedProduct.name}</h3>
      <form onSubmit={handleUpdate}>
            <input type="text" name="name" defaultValue={loadedProduct?.name} />
            <br />
            <input type="text" name="price" defaultValue={loadedProduct?.price} />
            <br />
            <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
