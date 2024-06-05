import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/table">Table</Link>
            <h1>This is Navbar</h1>
        </div>
    );
};

export default Navbar;
