import React from "react";
import { Route } from "react-router-dom";
import Account from "../Pages/Account/Profile";
import Register from "../Pages/Account/Authentication/Register";
import Login from "../Pages/Account/Authentication/Login";
import Tutorial from "../Pages/Tutorial/Questions";
import Laptops from "../Pages/BuyLaptops/Laptops";
import MoreInformation from "../Pages/MoreInformation";

function Router() {
    return (
        <div>
            <Route path="/account" component={Account}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/tutorial" component={Tutorial}/>
            <Route path="/laptops" component={Laptops}/>
            <Route path="/moreinformation" component={MoreInformation}/>
        </div>
    );
}

export default Router;