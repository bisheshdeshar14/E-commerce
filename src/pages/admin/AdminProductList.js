import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Button, Modal, Input, message } from "antd";

const AdminProductList = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/products");
            setProducts(response.data);
        } catch (error) {
            message.error("Failed to fetch products");
        }
    };

    const handleDeleteProduct = (id) => {
        Modal.confirm({
            title: "Are you sure you want to delete this product?",
            content: "This action cannot be undone.",
            okText: "Yes, Delete",
            okType: "danger",
            cancelText: "Cancel",
            onOk: async () => {
                try {
                    await axios.delete(`http://localhost:4000/products/${id}`);
                    message.success("Product deleted successfully");
                    fetchProducts();
                } catch (error) {
                    message.error("Failed to delete product");
                }
            },
        });
    };

    const handleEditProduct = async () => {
        if (!editProduct) return;
        try {
            await axios.put(`http://localhost:4000/products/${editProduct.id}`, editProduct);
            message.success("Product updated successfully");
            setEditProduct(null);
            setIsModalVisible(false);
            fetchProducts();
        } catch (error) {
            message.error("Failed to update product");
        }
    };

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (text) => `Rs.${text}`,
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <>
                    <Button type="primary" onClick={() => { setEditProduct(record); setIsModalVisible(true); }} style={{ marginRight: 8 }}>Edit</Button>
                    <Button type="danger" onClick={() => handleDeleteProduct(record.id)}>Delete</Button>
                </>
            ),
        },
    ];

    return (
        <>
            <h4>Product List</h4>
            <Table dataSource={products} columns={columns} rowKey="id" />
            <Modal
                title="Edit Product"
                visible={isModalVisible}
                onOk={handleEditProduct}
                onCancel={() => setIsModalVisible(false)}
            >
                <Input className="mb-2" value={editProduct?.title} onChange={(e) => setEditProduct({ ...editProduct, title: e.target.value })} placeholder="Title" />
                <Input className="mb-2" value={editProduct?.description} onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })} placeholder="Description" />
                <Input className="mb-2" type="number" value={editProduct?.price} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })} placeholder="Price" />
            </Modal>
        </>
    );
};

export default AdminProductList;