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
        <div className="flex flex-col justify-center items-center w-full h-screen bg-[#f3f4f6]">
            <form
                onSubmit={handleSubmit}
                className="max-w-[400px] w-full mx-auto bg-white p-4"
            >
                <div className="flex flex-col py-2">
                    <label>First name: </label>
                    <input
                        type="text"
                        placeholder="First name"
                        value={userDetails.firstname}
                        name="firstname"
                        onChange={handleChange}
                        className="border p-2"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label>Last name: </label>
                    <input
                        type="text"
                        placeholder="Last name"
                        value={userDetails.lastname}
                        name="lastname"
                        onChange={handleChange}
                        className="border p-2"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label>Age: </label>
                    <input
                        type="number"
                        placeholder="Age"
                        value={userDetails.age}
                        name="age"
                        onChange={handleChange}
                        className="border p-2"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label> Gender: </label>
                    <div className="border p-2">
                        <input type="radio" name="gender" />
                        <span className="inline-flex items-center ml-2">
                            Male
                        </span>
                        <input type="radio" className="ml-6" name="gender" />
                        <span className="inline-flex items-center ml-2">
                            Female
                        </span>
                    </div>
                </div>
                <button
                    className="border w-full my-5 py-2 bg-teal-900 hover:bg-teal-700 text-white font-bold"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
