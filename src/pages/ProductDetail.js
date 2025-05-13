import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
      
        dispatch(addCart(product));
      
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products/${id}`);
        console.log("API Response:", response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h2 className="text-center my-5">Loading...</h2>;
  }

  if (!product) {
    return <h2 className="text-center my-5">Product not found</h2>;
  }

  return (
    <>
    <Navbar/>
    <div className="container my-5 py-2">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400"
            height="400"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6 col-sm-12 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating?.rate} <i className="fa fa-star"></i>
            <span className="text-muted"> ({product.rating?.count} reviews)</span>
          </p>
          <h3 className="display-6 my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>

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

export default ProductDetail;
