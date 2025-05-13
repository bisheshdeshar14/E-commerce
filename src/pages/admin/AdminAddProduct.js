import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminAddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        image: ""
    });

    const handleAddProduct = async () => {
        if (!newProduct.title || !newProduct.price) {
            toast.error("Title and Price are required");
            return;
        }
        try {
            await axios.post("http://localhost:4000/products", newProduct);
            toast.success("Product added successfully");
            setNewProduct({ title: "", description: "", price: "", category: "", image: "" });
        } catch (error) {
            toast.error("Failed to add product");
        }
    };

    return (
        <div className="container py-4">
            <div className="mb-4">
                <h4>Add Product</h4>
                <input className="form-control mb-2" placeholder="Title" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} />
                <input className="form-control mb-2" placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                <input className="form-control mb-2" type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                <input className="form-control mb-2" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
                <input className="form-control mb-2" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                <button className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default AdminAddProduct;
