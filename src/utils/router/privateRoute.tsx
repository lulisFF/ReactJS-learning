/*
authorization verification
 */
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook";

const PrivateRoute = () => {
    //имитация токена true
    const auth = true; //useAuth()
    return auth ? <Outlet /> : <Navigate to={"login"} />;
};

export default PrivateRoute;
