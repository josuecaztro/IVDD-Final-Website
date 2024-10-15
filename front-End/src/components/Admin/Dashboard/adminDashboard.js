import React from 'react';
import './adminDashboard.css';
import MessageList from '../Messages/MessageList';


function DisplayAdminDashboard (){
    return (
        <div id="dashboard-pg">
        <h1>Admin Dashboard</h1>
        <MessageList/>
        </div>
    )
}

export default DisplayAdminDashboard;