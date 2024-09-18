
function ContactUs() {
    const backButtonRef = useRef(null);
    const formRef = useRef(null);

    const handleBackClick = () => {
        window.location.href = 'http://localhost:3000';
        console.log('clicked');
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = {
            description: formRef.current.messageBody.value,
            timeFrame: formRef.current.dateTime.value,
            firstName: formRef.current.firstName.value,
            lastName: formRef.current.lastName.value,
            phoneNumber: formRef.current.phoneNumber.value,
        };

        fetch('http://localhost:8080/api/prayer-request-forms', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyNDUyMDkzOCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzI0NDM0NTM4fQ.aj7RKk-hNOmrEeBTnGAytpY5aT5jpoWAoHO6DzRoSwgrh0iBPoo0gIQrWR0lmKEM-B7h74C-Fm-BI-9rO4jxDQ',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                alert('Prayer request submitted successfully!');
                formRef.current.reset(); // Optionally reset the form
            })
            .catch(error => {
                console.error('Error submitting prayer request:', error);
                alert('Error submitting prayer request');
            });
    };

    return (
        <div>
            <p>This page is for contact forms</p>
            <button ref={backButtonRef} onClick={handleBackClick}>Go back home</button>

            <h1>Submit Prayer Request</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label><br />
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name..." required /><br /><br />

                <label htmlFor="lastName">Last Name:</label><br />
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name..." required /><br /><br />

                <label htmlFor="phoneNumber">Phone Number:</label><br />
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number..." required /><br /><br />

                <label htmlFor="messageBody">Message Body:</label><br />
                <textarea id="messageBody" name="messageBody" rows="4" cols="50" placeholder="Enter your prayer request here..." required></textarea><br /><br />

                <label htmlFor="dateTime">Date/Time Needed:</label><br />
                <input type="text" id="dateTime" name="dateTime" placeholder="Enter date/time needed..." required /><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ContactUs;
