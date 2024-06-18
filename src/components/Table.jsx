import { useEffect, useState } from "react";

const Table = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8080/users/list");
            const data = await response.json();
            setUsers(data.value);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="relative overflow-x-auto m-20">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-teal-900 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                First name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length ? (
                            users.map((user) => {
                                return (
                                    <>
                                        <tr className="bg-[#d1d5db] border-b text-gray-900">
                                            <td className="px-6 py-4">
                                                {user.firstName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.lastName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.age}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.gender}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.country}
                                            </td>
                                        </tr>
                                    </>
                                );
                            })
                        ) : (
                            <tr className="font-bold text-2xl text-teal-900">
                                <td>No data to display!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
