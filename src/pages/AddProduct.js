import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/products");
        const products = await response.json();
        setData(products);
        setFilter(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  const filterProduct = (category) => {
    if (category === "all") {
      setFilter(data);
    } else {
      setFilter(data.filter((item) => item.category === category));
    }
  };

  const Loading = () => (
    <div className="col-12 py-5 text-center">
      <Skeleton height={40} width={560} />
      {[...Array(6)].map((_, index) => (
        <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("all")}>
          All
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>
          Men's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
          Women's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>
          Jewelry
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : (
          filter.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img className="card-img-top p-3" src={product.image} alt={product.title} height={300} />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                  <p className="card-text">{product.description.substring(0, 90)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
                    Buy Now  
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddProduct;