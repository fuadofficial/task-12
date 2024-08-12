import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = { name };

        axios.post('http://localhost:3000/api/users', newUser)
            .then(response => {
                console.log('User added:', response.data);
                setName(''); // Clear the input field after successful submission
            })
            .catch(error => {
                console.error('There was an error adding the user!', error);
            });
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter user name"
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
