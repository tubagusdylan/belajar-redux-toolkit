import { Form, Button } from "react-bootstrap";
import { useState } from "react";
// import { useDispatch } from "react-redux";

export const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  // const dispatch = useDispatch();

  return (
    <div className="p-3 border rounded-2">
      <h2>Edit Product</h2>
      <Form>
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
