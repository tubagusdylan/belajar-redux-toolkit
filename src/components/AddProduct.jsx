import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = (e) => {
    e.preventDefault();
    dispatch(saveProduct({ title, price }));
    const delay = setTimeout(() => {
      navigate("/");
    }, 1000);
    return () => clearTimeout(delay);
  };

  return (
    <div className="p-3 border rounded-2">
      <h2>Add Product</h2>
      <Form onSubmit={createProduct}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Title</Form.Label>
          <Form.Control type="text" placeholder="Enter product" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};
