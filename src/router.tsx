import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import About from "./pages/About/About";
import Top from "./pages/Top/Top";
import Product from "./pages/Products/Products";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Top />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/works" element={<About />} />
                <Route path="/contact" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router