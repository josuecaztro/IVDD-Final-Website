import React, { useState } from 'react';
import './adminDashboard.css';
import MessageList from '../Messages/MessageList';
import PRList from '../PRs/PRList';

function DisplayAdminDashboard() {
    const [locked, setLocked] = useState(true); //for the LOCKED status
    const [password, setPassword] = useState(''); //for password input
    const [errorMessage, setErrorMessage] = useState(''); //to log errors

    const requestPassword = (event) => {
        event.preventDefault(); //prevent auto reload
        const correctPassword = process.env.REACT_APP_ADMIN_PASS; 

        if (password === correctPassword) {
            setLocked(false); //UNLOCKS THE PAGE
            setErrorMessage(''); 
        } else {
            setErrorMessage('Incorrect password. Please try again.'); 
        }
    };

    return (
        <div id="dashboard-pg">
            {locked ? (
                <form onSubmit={requestPassword}>
                    <h1 id="dash-board-title">Enter Password to Access Admin Dashboard</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter password"
                        id="admin-input"
                        required
                    />
                    <button type="submit" id="admin-button">Submit</button>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
            ) : (
                <div>
                    <h1 id="dash-board-title">Admin Dashboard</h1>
                    <div id="lists-dashboard">
                        <MessageList />
                        <PRList />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DisplayAdminDashboard;
