import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AddProduct } from "./components/AddProduct";
import { ShowProduct } from "./components/ShowProduct";
import { EditProduct } from "./components/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
