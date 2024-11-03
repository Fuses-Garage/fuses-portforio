import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";
import About from "./pages/About/About";
import Top from "./pages/Top/Top";
import Product from "./pages/Products/Products";
import WorksPage from "./pages/Works/Works";
import NotFound from "./pages/404/NotFound";

const Router = () => (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Top />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="/contact" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router