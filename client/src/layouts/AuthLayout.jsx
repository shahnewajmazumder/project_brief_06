import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="auth-layout">
            <h1>Authentication</h1>
            <p>Login or Register</p>

            <Outlet />
        </div>
    );
}

export default AuthLayout;