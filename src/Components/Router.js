import React from "react";
import { Route } from "react-router-dom";
import Account from "../Pages/Account/Profile";
import Register from "../Pages/Account/Authentication/Register";
import Login from "../Pages/Account/Authentication/Login";

function Router() {
    return (
        <div>
            <Route path="/account" component={Account}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </div>
    );
}

export default Router;