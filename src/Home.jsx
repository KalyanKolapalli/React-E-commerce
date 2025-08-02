import {useEffect, useState } from "react"


import "./Home.css"


function Cart(){
    var [products,setProducts]=useState([])
   useEffect(()=>{
  
    async function handel(){
        try{
        var response= await fetch("https://fakestoreapi.com/products")
        var result =await response.json()
        setProducts(result)
        }catch(error){
            console.error("failed to fetch products",error);
            
        }
    }
        handel()
   },[])
    return(
        
            <div className="home-container">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    
    )
}

export default Cart
