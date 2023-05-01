import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrganizationList() {
    const [organizations, setOrganizations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/organization/api')
            .then(response => setOrganizations(response.data))
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (organizations.length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>Organizations:</h1>
                <ul>
                    {organizations.map(organization => (
                        <li key={organization.id}>
                            <h2>{organization.name}</h2>
                            <p>Latitude: {organization.latitude}</p>
                            <p>Longitude: {organization.longitude}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default OrganizationList;
