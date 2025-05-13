import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const items = await response.json();
        setData(items);
        setFilter(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    getItems();
  }, []);
  const isLogin = localStorage.getItem('is_login');
  const navigate = useNavigate();
  const addItem = (item) => {
    if(isLogin !== '1'){
      toast.success("You have to login to add to cart");
      navigate('/login');
    }else{
      dispatch(addCart(item));
      toast.success("Added to cart");
    }
    
  };

  const filterItem = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => (
    <div className="col-12 py-5 text-center">
      <Skeleton height={40} width={560} />
      <Skeleton height={592} count={6} />
    </div>
  );

  const ShowItems = () => (
    <>
      {/* <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
          All
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterItem("men's clothing")}>
          Men's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterItem("women's clothing")}>
          Women's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterItem("jewelery")}>
          Jewelry
        </button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterItem("electronics")}>
          Electronics
        </button>
      </div> */}
  
      {filter.length > 0 ? (
        filter.map((item) => {
          const itemPrice = parseFloat(item.price) || 0; // Ensure price is a number
          return (
            <div key={item.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img className="card-img-top p-3" src={item.image} alt={item.title} height={300} />
                <div className="card-body">
                  <h5 className="card-title">{item.title.substring(0, 12)}...</h5>
                  <p className="card-text">{item.description.substring(0, 90)}...</p>
                </div>
                <h3 className="display-6 my-4">Rs.{itemPrice.toFixed(2)}</h3> {/* Corrected here */}
                <div className="card-body">
                  <Link to={`/productdetail/${item.id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addItem(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center">No items available.</p>
      )}
    </>
  );
  

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">{loading ? <Loading /> : <ShowItems />}</div>
    </div>
  );
};

export default Products;
