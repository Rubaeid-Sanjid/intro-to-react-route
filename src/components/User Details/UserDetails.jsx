import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetailsData = useLoaderData();

    const {name, username, email, address, phone, website} = userDetailsData;
    return (
        <div className="border-2 space-y-4 border-sky-200 rounded-2xl p-4 text-xl mt-10">
            <h2><span className="font-semibold">Name:</span> {name}</h2>
            <h2><span className="font-semibold">Username:</span> {username}</h2>
            <h2><span className="font-semibold">Email:</span> {email}</h2>
            <h2><span className="font-semibold">Address:</span> {address.street}, {address.city}</h2>
            <h2><span className="font-semibold">Phone:</span> {phone}</h2>
            <h2><span className="font-semibold">Website:</span> {website}</h2>
        </div>
    );
};

export default UserDetails;