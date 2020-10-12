import React, {useCallback, useContext} from "react";
import db from "../firebase/firebase";
import {AuthContext} from "../firebase/Auth";
import {withRouter, Redirect} from "react-router";
import {Link} from "react-router-dom";

function Login({history}) {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await db
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }, [history]
    );
    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>
    }

    return (
        <div>
            <h1>Zaloguj</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Hasło
                    <input name="password" type="password" placeholder="Hasło"/>
                </label>
                <button type="submit">Zaloguj</button>
            </form>
            <h2>Zarejestruj się</h2>
            <Link to="/signup">Tutaj</Link>
        </div>
    )
}

export default withRouter(Login);