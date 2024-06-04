const Login = ({ userDetails, setUserDetails }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First name: </label>
                <input
                    type="text"
                    placeholder="First name"
                    value={userDetails.firstname}
                    name="firstname"
                    onChange={handleChange}
                />

                <label>Last name: </label>
                <input
                    type="text"
                    placeholder="Last name"
                    value={userDetails.lastname}
                    name="lastname"
                    onChange={handleChange}
                />
                <label>Age: </label>
                <input
                    type="number"
                    placeholder="Age"
                    value={userDetails.age}
                    name="age"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
