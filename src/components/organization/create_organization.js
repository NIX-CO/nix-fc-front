import { useState } from 'react';
import axios from 'axios';

function CreateOrganization() {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('latitude', latitude);
        formData.append('longitude', longitude);

        try {
            const response = await axios.post('http://127.0.0.1:8000/organization/api/create/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(response.data);
            // handle success
        } catch (error) {
            console.error(error.response.data);
            // handle error
        }
    };

    return (
        <section>
            <div className="container col-xxl-7 col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9 mt-3 p-4 border rounded shadow bg-white">
                <h2>Create Organization</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            onChange={(event) => setImage(event.target.files[0])}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="number"
                            id="latitude"
                            name="latitude"
                            placeholder="latitude"
                            className="form-control"
                            value={latitude}
                            onChange={(event) => setLatitude(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="number"
                            id="longitude"
                            name="longitude"
                            className="form-control"
                            placeholder="longitude"
                            value={longitude}
                            onChange={(event) => setLongitude(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary">
                            submit
                        </button>
                        <a href="/organization/" className="btn btn-danger">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CreateOrganization;
