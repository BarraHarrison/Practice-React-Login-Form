import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // React Router for navigation
import './Navbar.css'; // External CSS for styling

const Navbar = () => {
    const navigate = useNavigate();  // Hook to programmatically navigate

    // Function to handle clicking on the navbar-title
    const handleTitleClick = () => {
        navigate('/');  // Navigate back to the home page
    };

    return (
        <nav className="navbar">
            {/* Make the title clickable and navigate to '/' */}
            <h1 className="navbar-title" onClick={handleTitleClick}>🏠</h1>
            <ul className="navbar-links">
                <li>
                    <Link to="/register" className="navbar-link">Register</Link>
                </li>
                <li>
                    <Link to="/login" className="navbar-link">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
