import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrganizationList() {
    const [organizations, setOrganizations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/organization/api/')
            .then((response) => setOrganizations(response.data))
            .catch((error) => setError(error));
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (organizations.length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            <section>
                <div className="container mt-4">
                    <hr />
                    <a href="http://127.0.0.1:8000/organization/create/" className="btn btn-primary mb-2">
                        Create Organization
                    </a>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {organizations.map((organization) => (
                                <tr key={organization.id}>
                                    <td>{organization.name}</td>
                                    <td>
                                        <img src={organization.image.url} width="100" height="100" />
                                    </td>
                                    <td>
                                        <a
                                            href={`http://127.0.0.1:8000/organization/${organization.id}/update/`}
                                            className="btn btn-primary"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href={`http://127.0.0.1:8000/organization/${organization.id}/delete/`}
                                            className="btn btn-danger"
                                            onClick={() =>
                                                window.confirm('Are you sure you want to delete this organization?')
                                            }
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default OrganizationList;
