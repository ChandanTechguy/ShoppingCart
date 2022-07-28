import React from "react";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const NewProduc = () => {
  const history = useNavigate()
    const id = useRef(null);
    const title = useRef("");
    const description = useRef("");
    const price = useRef(null);
    const discount = useRef(null);
    const rating = useRef(null);
    const stock = useRef(null);
    const brand = useRef("");
    const category = useRef("");
    const images = useRef("");
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    

    const json = {
      id: id.current.value,
      title: title.current.value,
      description: description.current.value,
      price: price.current.value,
      rating: rating.current.value,
      stock: stock.current.value,
      brand: brand.current.value,
      category: category.current.value,
      images: images.current.value,
      
  }

    
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json)
    })
    .then(res => res.json())
    .then(console.log);
    history('/product')
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          ShopHere
        </a>
      </nav>

      <h3 className="add-new-product">Add new Product</h3>
      <div className="new-product">
        <form action="" className="form-container-products" onSubmit={handleSubmit}>
        <label htmlFor="formGroupExampleInput">Id</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Id" ref={id} required
          />

          <label htmlFor="formGroupExampleInput">Title</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Title" ref={title} required
          />
          <label htmlFor="formGroupExampleInput">Description</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Description" ref={description} required
          />
          <label htmlFor="formGroupExampleInput">Price</label>
          <input
            type="text"
            className="form-control"
      
            id="formGroupExampleInput"
            placeholder="Enter Price" ref={price} required
          />
          <label htmlFor="formGroupExampleInput">Discount Percentage</label>
          <input
            type="number"
            defaultValue={0}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Discount percentage" ref={discount} required 
          />
          <label htmlFor="formGroupExampleInput">Rating</label>
          <input
            type="number"
            className="form-control"
            defaultValue={0}
            id="formGroupExampleInput"
            placeholder="Enter Rating"required ref={rating} 
          />
          <label htmlFor="formGroupExampleInput">Stock</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Stock" required ref={stock}
          />
          <label htmlFor="formGroupExampleInput">Brand</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Brand" required ref={brand}
          />
          <label htmlFor="formGroupExampleInput">Category</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Category" required ref={category}
          />
          
          <label htmlFor="formGroupExampleInput">Images</label>
          <input
            type="file"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="" required ref={images}
          />
          <button type="submit" className="btn-submit btn-outline-primary">Add Product</button>

        </form>
      </div>
    </>
  );
};

export default NewProduc;
