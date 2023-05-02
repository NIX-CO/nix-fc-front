import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api';

const OrganizationDetails = () => {
    const [organization, setOrganization] = useState(null);
    const { pk } = useParams();

    useEffect(() => {
        const fetchOrganization = async () => {
            const { data } = await axios.get(`http://127.0.0.1:8000/organization/api/${pk}/`);
            setOrganization(data);
        };
        fetchOrganization();
    }, [pk]);

    useEffect(() => {
        // Define a global callback function for the Maps API
        window.initMap = () => {
            // Initialize the map only if the organization data has loaded
            if (organization) {
                const map = new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: organization.latitude, lng: organization.longitude },
                    zoom: 15,
                });

                const marker = new window.google.maps.Marker({
                    position: { lat: organization.latitude, lng: organization.longitude },
                    map: map,
                    title: organization.name,
                });
            }
        };

        // Load the Maps API script dynamically
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBC7TrnSJ6ZvaNUaspY6zbmOAbrz5PFF04&callback=initMap`;
        script.async = true;
        document.head.appendChild(script);
    }, [organization]);

    if (!organization) {
        return <div>Loading organization...</div>;
    }

    return (
        <section className="py-5">
            <div className="container py-5">
                <div className="reflow-product">
                    <div className="ref-media">
                        <div className="ref-preview">
                            <img style={{ width: 500, height: 400 }} src={organization.image} alt={organization.name} />
                        </div>
                    </div>
                    <div className="ref-product-data">
                        <h2 className="ref-name">{organization.name}</h2>
                        <strong className="ref-price ref-on-sale">
                            OFFRES & TARIFS Avec {organization.name}, jouez quand vous voulez, avec qui vous voulez... On attend que vous !
                        </strong>
                        <div style={{ height: 270 }}></div>
                    </div>
                    <div className="ref-product-controls">
                        <a className="ref-button" href="http://127.0.0.1:8000/reservation/reserver/">
                            Show Fields
                        </a>
                    </div>
                    <div id="map" style={{ height: 200, width: 10000 }}></div>
                </div>
            </div>
        </section>
    );
};

export default OrganizationDetails;
