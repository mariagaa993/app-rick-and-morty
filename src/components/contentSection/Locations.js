import React, { useState, useContext } from 'react';
import LocationModal from '../modals/LocationModal';
import { useQuery, gql } from '@apollo/client';
import InputContext from '../contexts/InputContext';
import PagesContext from '../contexts/PagesContext';

const Locations = () => {
    const {input} = useContext(InputContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState();
    const [displayLocationModal, setDisplayLocationModal] = useState(false);

    const locationInfo = location => {
        setSelectedLocation(location);
        setDisplayLocationModal(true);
    };

    const nextPage = () => setPageNumber(pageNumber + 1);

    const prevPage = () => setPageNumber(pageNumber - 1);

    const dataQuery = gql`
    query {
        locations(page:${pageNumber}, filter:{name:"${input}"}) {
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
            <div key={location.id} className="content-section-cards-card">
                <h3 className="content-section-cards-card-title">{location.name}</h3>
                <p className="content-section-cards-card-paragraph">{location.dimension}</p>
                <button 
                    className="content-section-cards-card-button"
                    onClick={() => locationInfo(location)}>
                    View More
                </button>
            </div>
        );
    });
   
    return (
        <PagesContext.Provider value={{ selectedLocation, setDisplayLocationModal }}>
            <section className="content-section">
                <h1 className="content-section-title">Locations</h1>
                <div className="content-section-cards">
                    {dataLocations}
                </div>
                <div className="content-section-buttons">
                    <button 
                        type="button" 
                        className="prev-button" 
                        disabled={`${pageNumber === 1 ? 'disabled' : ''}`} 
                        onClick={prevPage}>
                        Prev
                    </button>
                    <button 
                        type="button"
                        className="next-button" 
                        disabled={`${pageNumber === 34 ? 'disabled' : ''}`}
                        onClick={nextPage}>
                        Next
                    </button>
                </div>
                { displayLocationModal ? <LocationModal /> : null }
            </section>
        </PagesContext.Provider>  
    );
}

export default Locations;
