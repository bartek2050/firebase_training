import React from "react";
import app from "../firebase/firebase";

function Home() {
    return (
        <>
            <h1>Strona główna</h1>
            <button onClick={() => app.auth().signOut()}>Wyloguj</button>
            </>
    )
}

export default Home;