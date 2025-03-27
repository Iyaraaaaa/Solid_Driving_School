import React, {useEffect, useState} from 'react'
import {Navigate} from "react-router-dom";
import toast from "react-hot-toast";

const AdminRoutes = ({ children }) => {

    const accessToken = localStorage.getItem("access_token"); // Check if the user is authenticated
    const loggeduser = JSON.parse(localStorage.getItem("auth_user")); // Get logged user info
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (accessToken) {
            const hasUserRole = ["ADMIN", "SUPER_ADMIN"].includes(loggeduser?.role?.name);
            setAuthenticated(hasUserRole);
        }
        setLoading(false);
    }, [accessToken, loggeduser]);

    if (loading) {
        return <div className="flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span> </div>; // You can replace this with a spinner or any loading indicator
    }

    // Redirect to login if no access token or invalid role
    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    console.log(isAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default AdminRoutes
