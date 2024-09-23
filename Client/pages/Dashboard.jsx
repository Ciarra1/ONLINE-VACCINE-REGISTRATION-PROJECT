import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Dashboard() {
    const { user } = useContext(UserContext);

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-6">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                {!!user && (
                    <div>
                        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                        <p className="mb-2"><strong>Full Name:</strong> {user.fullName}</p>
                        <p className="mb-2"><strong>Contact Number:</strong> {user.contactNo}</p>
                        <p className="mb-2"><strong>Address:</strong> {user.address}</p>
                        <p className="mb-2"><strong>Age:</strong> {user.age}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
