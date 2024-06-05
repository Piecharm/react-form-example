import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Login
                            userDetails={userDetails}
                            setUserDetails={setUserDetails}
                        />
                    }
                />
                <Route
                    path="/table"
                    element={<Table userDetails={userDetails} />}
                />
            </Routes>
        </>
    );
}

export default App;
