import React, {useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import LocationModal from '../../modals/LocationModal';

const LocationsQuery = gql`
    {
        locations {
            results {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    image
                }
            }
        }
    }
`;

const Locations = () => {
    const [selectedLocation, setSelectedLocation] = useState();
    const [displayLocationModal, setDisplayLocationModal] = useState(false);
    const { loading, error, data } = useQuery(LocationsQuery);

    const locationInfo = location => {
        setSelectedLocation(location);
        setDisplayLocationModal(true);
    }
    
    if (loading) return <h1>Loading...</h1>;
    if (error) return <p>Error :(</p>;
    
    return (
        <React.Fragment>
            <section className="characters">
                <h1 className="characters-title">Locations</h1>

                {
                    displayLocationModal ?
                        <LocationModal location={selectedLocation} close={() => setDisplayLocationModal(false)} />
                    :
                        null  
                }

                <div className="cards-container">
                    {
                        data.locations.results.map(location => {
                            return (
                                <div key={location.id} className="card">
                                    <h3 className="card-title">{location.name}</h3>
                                    <p className="card-paragraph">{location.dimension}</p>
                                    <button 
                                        className="card-button"
                                        onClick={() => locationInfo(location)}>
                                        Ver más
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    );
}

export default Locations;
