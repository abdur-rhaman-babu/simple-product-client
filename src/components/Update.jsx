import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedProduct = useLoaderData()
    
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const updatedProduct = {name, price}
        console.log(updatedProduct)

        fetch(`http://localhost:7000/products/${loadedProduct._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('data update successfully')
            }
        })
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
