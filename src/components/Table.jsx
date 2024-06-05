const Table = ({ userDetails }) => {
    return (
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
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-[#d1d5db] border-b text-gray-900">
                        <td className="px-6 py-4">{userDetails.firstname}</td>
                        <td className="px-6 py-4">{userDetails.lastname}</td>
                        <td className="px-6 py-4">{userDetails.age}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
