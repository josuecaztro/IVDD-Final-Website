import React, { useState } from 'react';
import './MessagesList.css';

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
                Get
            </button>

            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}

            <ul className="data-list">
                {data.map((item, index) => (
                    <li key={index} className="data-item">
                        {/* Customize this based on the structure of your JSON object */}
                        <h2 className="item-title">{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
