import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct, productSelector, deleteProduct } from "../features/productSlice";
import { Link } from "react-router-dom";

export const ShowProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <h2>Toko Online</h2>
      <Link to="add">
        <Button variant="success">Add New</Button>
      </Link>
      <Table className="mt-4" striped bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`edit/${product.id}`}>
                    <Button className="mx-1" variant="info">
                      Edit
                    </Button>
                  </Link>
                  <Button onClick={() => dispatch(deleteProduct(product.id))} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
