import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Table from "./components/Table";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
    const initialUserDetails = {
        firstName: "",
        lastName: "",
        age: 0,
        gender: "",
        country: "",
    };
    const [userDetails, setUserDetails] = useState(initialUserDetails);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Login
                            userDetails={userDetails}
                            setUserDetails={setUserDetails}
                            initialUserDetails={initialUserDetails}
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
