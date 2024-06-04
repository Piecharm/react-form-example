import "./App.css";
import Login from "./components/Login";
import Table from "./components/Table";
import { useState } from "react";

function App() {
    const initialUserDetails = {
        firstname: "",
        lastname: "",
        age: 0,
    };
    const [userDetails, setUserDetails] = useState(initialUserDetails);

    return (
        <>
            <Login userDetails={userDetails} setUserDetails={setUserDetails} />
            <Table userDetails={userDetails} />
        </>
    );
}

export default App;
