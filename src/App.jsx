import { Container, Row, Col } from "react-bootstrap";
import { AddProduct } from "./components/AddProduct";
import { ShowProduct } from "./components/ShowProduct";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <AddProduct />
        </Col>
        <Col>
          <ShowProduct />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
