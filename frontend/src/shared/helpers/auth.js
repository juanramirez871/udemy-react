import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const withAuth = (Component) => (props) => {

    const nameComponent = Component.toString().split(" ")[1];
    const navigate = useNavigate();
    const namesNotRedirect = ["Login()"];
    const isAuthenticated = Cookies.get("auth")

    useEffect(() => {

        if (!isAuthenticated && !namesNotRedirect.includes(nameComponent)) return navigate("/login");
        else if(isAuthenticated && namesNotRedirect.includes(nameComponent)) return navigate(-1);
        
    }, [isAuthenticated, navigate]);

    return <Component {...props} />;
};

export default withAuth;