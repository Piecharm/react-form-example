import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-teal-900 border-gray-200 text-2xl font-semibold whitespace-nowrap text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse self-center hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Link className="focus:text-teal-200" to="/">
                        Home
                    </Link>
                </div>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-teal-800 md:dark:bg-teal-900 dark:border-gray-700">
                        <li>
                            <div className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent self-center">
                                <Link
                                    className="focus:text-teal-200"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent self-center">
                                <Link
                                    className="focus:text-teal-200"
                                    to="/table"
                                >
                                    Table
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
