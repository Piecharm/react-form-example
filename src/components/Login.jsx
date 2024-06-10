const Login = ({ userDetails, setUserDetails, initialUserDetails }) => {
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

    const handleReset = () => {
        setUserDetails(initialUserDetails);
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
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            checked={userDetails.gender === "male"}
                            onChange={handleChange}
                        />
                        <span className="inline-flex items-center ml-2">
                            Male
                        </span>
                        <input
                            type="radio"
                            className="ml-6"
                            name="gender"
                            value="female"
                            id="female"
                            checked={userDetails.gender === "female"}
                            onChange={handleChange}
                        />
                        <span className="inline-flex items-center ml-2">
                            Female
                        </span>
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="countries" className="block">
                        Country:
                    </label>
                    <select
                        id="countries"
                        className="border p-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full"
                        value={userDetails.country}
                        onChange={handleChange}
                        name="country"
                    >
                        <option value="">Choose a Country</option>
                        <option value="India">India</option>
                        <option value="Italy">Italy</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>
                <div className="flex justify-between py-2">
                    <button
                        className="border w-full my-3 mx-3 py-2 bg-teal-900 hover:bg-teal-700 text-white font-bold"
                        type="submit"
                    >
                        Submit
                    </button>
                    <button
                        className="border w-full my-3 mx-3 py-2 bg-teal-900 hover:bg-teal-700 text-white font-bold"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
