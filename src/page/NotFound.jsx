import React from "react";
import {useLocation} from "react-router";

const NotFound = () => {
    const location = useLocation();
    return (
        <div>
            <h2>Following page is not found: {location.pathname}</h2>
        </div>
    );
};

export default NotFound;