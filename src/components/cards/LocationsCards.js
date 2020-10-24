import React, {Fragment, useContext} from 'react';
import LocationModal from '../modals/LocationModal';
import SectionContext from '../../contexts/SectionContext';

const LocationsCards = () => {
    const { 
            data, 
            setSelectedLocation, 
            displayLocationModal, 
            setDisplayLocationModal 
        } = useContext(SectionContext);

    const locationInfo = location => {
        setSelectedLocation(location);
        setDisplayLocationModal(true);
    };

    return (
        <Fragment>
            {
                data.locations.results.map(location => {
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
                })
            } 
            { displayLocationModal ? <LocationModal /> : null } 
        </Fragment>
    );
}

export default LocationsCards;
