import React, {useState, useReducer} from 'react';
import LocationModal from '../../modals/LocationModal';
import {reducer, ACTION_FILTER} from '../../reducer/Reducer';

const Locations = ({locations}) => {
    const [state, dispatch] = useReducer(reducer, locations);
    const [selectedLocation, setSelectedLocation] = useState();
    const [displayLocationModal, setDisplayLocationModal] = useState(false);

    const locationInfo = location => {
        setSelectedLocation(location);
        setDisplayLocationModal(true);
    };

    const dataLocations = state.map(location => {
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

    const filter = (e) => {
        dispatch({
            type: ACTION_FILTER,
            payload: {
                data: locations,
                query: e.target.value
            },
        });
    };
   
    return (
        <React.Fragment>
            <section className="characters">
                <div className="content-container-search">
                    <input 
                        className="input-search" 
                        onChange={filter} 
                        type="text" 
                        placeholder="Search..."/>
                    <button 
                        className="search-button" 
                        type="button">Clear
                    </button>
                </div>
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
