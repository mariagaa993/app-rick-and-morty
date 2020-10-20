import React, { useContext } from 'react';
import Modal from './Modal';
import PagesContext from '../../contexts/PagesContext';

const LocationsModal = () => {
    const {selectedLocation, setDisplayLocationModal} = useContext(PagesContext);

    const close = () => setDisplayLocationModal(false);
    
    const firstFiveResidents = selectedLocation.residents.slice(0, 5);

    const residents = firstFiveResidents.map(resident => {
        return (
            <div key={resident.id} className="page-modals-figcaption-mini-cards">
                <img 
                    className="page-modals-figcaption-mini-cards-img" 
                    src={resident.image}
                    alt={resident.name} 
                />
                <p className="page-modals-figcaption-mini-cards-p">{resident.name}</p>
            </div>
        );
    });       

    return (       
        <Modal title={selectedLocation.name} close={close}>
            <figure className="page-modals-figure">
                <figcaption className="page-modals-figcaption">
                    <p className="page-modals-figcaption-p"><strong>Type:</strong> 
                        {` ${selectedLocation.type === "" ? 
                            'No Information Available' : selectedLocation.type}
                        `}
                    </p>
                    <p className="page-modals-figcaption-p"><strong>Dimension:</strong> 
                        {` ${selectedLocation.dimension === "" ? 
                            'No Information Available' : selectedLocation.dimension}
                        `}
                    </p>
                    <p className="page-modals-figcaption-p"><strong>Residents:</strong></p>
                    {residents}
                </figcaption>
            </figure>
        </Modal>
    );
}

export default LocationsModal;
