import React, { useState } from 'react';
import './MessageList.css';

const MessageList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedId, setSelectedId] = useState(null);  // Track selected item ID

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://iglesiavozdedios.net/api/prayer-request-forms');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (id) => {
        // Set the ID of the selected item
        setSelectedId(id === selectedId ? null : id); // Toggle selection
        console.log(selectedId);
    };

    const deletePrayerRequest = async (id) => {
        if (!id) {
            alert('Please select a prayer request to delete.');
            return;
        }
        try {
            const response = await fetch(`https://iglesiavozdedios.net/api/prayer-request-forms/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete the request');
            }
            // Remove the deleted item from the state
            setData((prevData) => prevData.filter(item => item.id !== id));
            setSelectedId(null);  // Reset the selection after deletion
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="data-list-container">
            <button
                onClick={fetchData}
                className="get-button"
            >
                Get Prayer Requests
            </button>

            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}

            {/* Add a Delete button */}
            <button
                onClick={() => deletePrayerRequest(selectedId)}
                className="delete-button"
                disabled={!selectedId}  // Disable if no item is selected
            >
                Delete Selected
            </button>

            <ul className="data-list">
                {data.map((item) => (
                    <li 
                        key={item.id} 
                        className={`data-item ${item.id === selectedId ? 'highlighted' : ''}`}  // Highlight selected item
                        onClick={() => handleSelect(item.id)}  // Select item on click
                    >
                        <h2 className="item-names">{item.firstName} {item.lastName}</h2>
                        <p className="data-phone-num">Phone #: {item.phoneNumber}</p>
                        <p className="data-pr">{item.messageBody}</p>
                        <p className="data-phone-num"><strong>Deadline: </strong>{item.dateTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
