import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrganizationUpdate = () => {
    const [organization, setOrganization] = useState(null);
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const { pk } = useParams();

    useEffect(() => {
        const fetchOrganization = async () => {
            const { data } = await axios.get(`http://127.0.0.1:8000/organization/api/${pk}/`);
            setOrganization(data);
        };
        fetchOrganization();
    }, [pk]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('latitude', latitude);
        formData.append('longitude', longitude);
        const { data } = await axios.put(`http://127.0.0.1:8000/organization/api/${pk}/update/`, formData);
        setOrganization(data);
        setName('');
        setImage(null);
        setLatitude('');
        setLongitude('');
    };

    if (!organization) {
        return <div>Loading organization...</div>;
    }

    return (
        <div className="container col-xxl-7 col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9 mt-3 p-4 border rounded shadow bg-white">
            <h2>Update Organization</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" id="name" value={organization.name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="image">Image:</label>
                    <input className="form-control" type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="latitude">Latitude:</label>
                    <input className="form-control" type="text" id="latitude" value={organization.latitude} onChange={(e) => setLatitude(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="longitude">Longitude:</label>
                    <input className="form-control" type="text" id="longitude" value={organization.longitude} onChange={(e) => setLongitude(e.target.value)} />
                </div>
                <div className="mt-4">
                <button  className="btn btn-primary" type="submit">Update Organization</button>
                <a href="/organization/" className="btn btn-danger">
                            Cancel
                        </a>
                </div>
            </form>
        </div>
    );
};

export default OrganizationUpdate;
