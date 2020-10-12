import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./elements/Home";
import {AuthProvider} from "./firebase/Auth";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./elements/SignUp";
import Login from "./elements/Login";


function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
