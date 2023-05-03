import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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

    if (!organization) {
        return <div>Loading organization...</div>;
    }

    const position = [organization.latitude, organization.longitude];

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
                    <div id="map" style={{height: 200,width:10000}}>                    
                        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                            />
                            <Marker position={position}>
                                <Popup>{organization.name}</Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OrganizationDetails;
