import React, { useState } from 'react';
import './MessageList.css';

const MessageList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

            <ul className="data-list">
                {data.map((item, index) => (
                    <li key={index} className="data-item">
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
