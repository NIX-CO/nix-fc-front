import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';
import { BeatLoader } from 'react-spinners';



const redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

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
        return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
            <BeatLoader color="#123abc" loading={true} />
          </div>
        );
      }

    const position = [organization.latitude, organization.longitude];

    return (
        <section className="py-5">
            <div className="container py-5">
                <div className="reflow-product">
                    <div className="ref-media">
                        <div className="ref-preview">
                            <img style={{ width: 500, height: 400 }} src="https://fr.mylivingbloom.com/wp-content/uploads/2021/12/417.-Terrain-de-foot-dans-son-jardin-1943371894.jpg" alt={organization.name} />
                        </div>
                    </div>
                    <div className="ref-product-data">
                        <h2 className="ref-name">{organization.name}</h2>
                        <strong className="ref-price ref-on-sale">
                            OFFRES & TARIFS Avec {organization.name}, jouez quand vous voulez, avec qui vous voulez... On attend que vous !
                        </strong>
                    </div>
                    <div className="ref-product-controls">
                        <a className="ref-button" href="http://127.0.0.1:8000/reservation/reserver/">
                            Show Fields
                        </a>
                    </div>
                    <div className="map-container" style={{ width: '100%', height: '400px' }}>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={position} icon={redIcon}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizationDetails;
