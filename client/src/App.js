import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    Navigate
} from "react-router-dom";
import Home from "./component/Main/Home";
import Signup from "./component/Auth/Signup";
import Login from "./component/Auth/Login";




const App = () => {

    const user = localStorage.getItem("token");

    // let routes = useRoutes([ 
    //     { path: "/", element: <Home /> },
    //     { path: "/signup", element: <Signup /> },
    //     { path: "/login", element: <Login /> },

    // ]);
    // return routes;


    return (
        <>
        <Routes>
            {user && <Route path="/" element={<Home />}
            />}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />       
        </Routes>
        </>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;