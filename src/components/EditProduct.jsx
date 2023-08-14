import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, productSelector, updateProduct } from "../features/productSlice";

export const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => productSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, title, price }));
    const delay = setTimeout(() => {
      navigate("/");
    }, 1000);
    return () => clearTimeout(delay);
  };

  return (
    <div className="p-3 border rounded-2">
      <h2>Edit Product</h2>
      <Form onSubmit={handleUpdateProduct}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Title</Form.Label>
          <Form.Control type="text" placeholder="Enter product" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};
