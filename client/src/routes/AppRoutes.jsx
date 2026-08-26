import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/mainlayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
    return (
        <Routes>

            {/* ================= MAIN WEBSITE LAYOUT ================= */}

            <Route path="/" element={<MainLayout />}>

                {/* Home */}
                <Route index element={<Home />} />

                {/* Other Pages */}
                <Route path="products" element={<Products />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />

            </Route>


            {/* ================= AUTHENTICATION LAYOUT ================= */}

            <Route element={<AuthLayout />}>

                {/* Login */}
                <Route path="/login" element={<Login />} />

            </Route>


            {/* ================= 404 PAGE ================= */}

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default AppRoutes;