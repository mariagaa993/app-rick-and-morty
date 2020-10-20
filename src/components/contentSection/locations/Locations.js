import React, {useState, useReducer} from 'react';
import LocationModal from '../../modals/LocationModal';
import { useQuery, gql } from '@apollo/client';

const Locations = ({input}) => {
    const [selectedLocation, setSelectedLocation] = useState();
    const [displayLocationModal, setDisplayLocationModal] = useState(false);

    const locationInfo = location => {
        setSelectedLocation(location);
        setDisplayLocationModal(true);
    };

    const dataQuery = gql`
    query {
        locations(filter:{name:"${input}"}) {
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
    }`;

    const { loading, error, data } = useQuery(dataQuery);

    if (loading) return <h1 className="loading-error">Loading...✨</h1>;
    if (error) return <h1 className="loading-error">Error!😭</h1>;
    
    const locations = data.locations.results;

    const dataLocations = locations.map(location => {
        return (
            <div key={location.id} className="card">
                <h3 className="card-title">{location.name}</h3>
                <p className="card-paragraph">{location.dimension}</p>
                <button 
                    className="card-button"
                    onClick={() => locationInfo(location)}>
                    View More
                </button>
            </div>
        );
    });
   
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
                    {dataLocations}
                </div>
            </section>
        </React.Fragment>
    );
}

export default Locations;
