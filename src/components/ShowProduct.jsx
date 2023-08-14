import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ShowProduct = () => {
  const { title, price } = useSelector((state) => state.product);

  return (
    <Card>
      <Card.Body className="fw-semibold">Title: {title}</Card.Body>
      <Card.Body className="fw-semibold">Price: Rp{price}</Card.Body>
    </Card>
  );
};
