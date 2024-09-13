import React, { useState, useRef, useEffect } from 'react';
import HeaderBar from '../../components/user/HeaderBar';
import { CiEdit } from "react-icons/ci";

function Profile() {
    const [editing, setEditing] = useState(null);
    const [userDetails, setUserDetails] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1 234 567 890',
        address: '123 Main Street, City, Country',
        postalCode: '12345',
    });

    const [originalDetails, setOriginalDetails] = useState(userDetails);

    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSave = () => {
        setOriginalDetails(userDetails);
        setEditing(null);
    };

    const hasChanges = JSON.stringify(userDetails) !== JSON.stringify(originalDetails);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (editing && inputRef.current && !inputRef.current.contains(event.target)) {
                setEditing(null);  // Exit editing mode if clicked outside
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [editing]);


    return (
        <>
            <HeaderBar />

            <div className="px-5 sm:px-0 flex flex-col items-center pb-28 sm:pb-10">
                <div className="w-full max-w-3xl bg-white border-t shadow-md rounded-lg p-6 mt-10">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-xl text-gray-500 font-semibold font-serif">Login and Security</h1>
                        {hasChanges &&
                            <span onClick={handleSave} className='text-blue-500 cursor-pointer hover:underline'>Save Changes</span>
                        }
                    </div>

                    <div className="mt-8 space-y-6">
                        {['name', 'email', 'phone', 'address', 'postalCode'].map((field) => (
                            <div key={field} className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h2 className="text-lg font-medium text-gray-600 capitalize">{field}</h2>
                                    {editing === field ?
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            name={field}
                                            value={userDetails[field]}
                                            onChange={handleInputChange}
                                            className="px-3 py-1 border border-gray-400 rounded-md text-gray-800 focus:outline-none"
                                        />
                                        :
                                        <p className="px-3 text-gray-800 border border-white">{userDetails[field]}</p>
                                    }
                                </div>
                                <span
                                    onClick={() => setEditing(field)}
                                    className="text-blue-600 text-xl cursor-pointer hover:text-blue-900">
                                    <CiEdit />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;