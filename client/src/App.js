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
import Profile from "./component/Profile/Profile";
import EditProfile from "./component/Profile/EditProfile";
import AddProduct from "./component/Product/AddProduct";
import AddCategory from "./component/Category/AddCategory";
import UpdateProduct from "./component/Product/UpdateProduct";




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
            {<Route path="/" element={<Home />}
            />}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={<Navigate replace to="/login" />} />        */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/add_product" element={<AddProduct />} />
            <Route path="/add_category" element={<AddCategory />} />
            <Route path="/update_product" element={<UpdateProduct />} />
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