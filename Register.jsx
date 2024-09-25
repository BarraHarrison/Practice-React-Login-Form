import React, { useState } from 'react';
import './Register.css'

const Register = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        bio: ''
    });

    // State to handle success or error messages
    const [message, setMessage] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');  // Clear previous messages

        try {
            // Send POST request to the Flask server
            const response = await fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('User registered successfully!');
            } else {
                setMessage(data.error || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
