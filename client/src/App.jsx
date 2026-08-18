import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/mainlayout";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main website */}
        <Route path="/" element={<MainLayout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          {/* Profile */}
          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Page not found */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;