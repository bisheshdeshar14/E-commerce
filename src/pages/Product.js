import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [ product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  
  const addProduct = (product) => {
    
      dispatch(addCart(product));
    
  };
  

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        setLoading2(true);
  
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
  
        const data = await response.json();
        setProduct(data);
        setLoading(false);
  
        if (!data.category) {
          throw new Error("Product category is undefined");
        }
  
        const response2 = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
  
        if (!response2.ok) {
          throw new Error("Failed to fetch similar products");
        }
  
        const data2 = await response2.json();
        if (!Array.isArray(data2)) {
          throw new Error("Invalid similar products data");
        }
  
        setSimilarProducts(data2);
        setLoading2(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setLoading2(false);
      }
    };
  
    getProduct();
  }, [id]);  // ✅ Closing useEffect properly
  
  
   

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product?.image}
            alt={product?.title}
            width="400px"
            height="400px"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6 col-sm-12 py-5">
          <h4 className="text-uppercase text-muted">{product?.category}</h4>
          <h1 className="display-5">{product?.title}</h1>
          <p className="lead">
            {product?.rating?.rate} <i className="fa fa-star"></i>
            <span className="text-muted"> ({product?.rating?.count} reviews)</span>
          </p>
          <h3 className="display-6 my-4">${product?.price}</h3>
          <p className="lead">{product?.description}</p>

          <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
