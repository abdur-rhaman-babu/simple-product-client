import "./App.css";
function App() {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const price = e.target.price.value;
    const products = { name, price };
    console.log(products);
    fetch("http://localhost:7000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple crud 2</h1>
      <form onSubmit={handleAddProduct}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="price" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
