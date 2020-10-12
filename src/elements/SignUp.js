import React, {useCallback} from "react";
import app from "../firebase/firebase";


function SignUp({history}) {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/")
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Zapisz się</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Hasło
                    <input name="password" type="password" placeholder="Hasło"/>
                </label>
                <button type="submit">Zapisz się</button>
            </form>
        </div>
    );
};

export default SignUp;