import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>

            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router