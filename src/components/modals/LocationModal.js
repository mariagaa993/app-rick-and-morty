import React from 'react';
import Modal from './Modal';

const LocationsModal = ({location, close}) => {
    
    const firstFiveResidents = location.residents.slice(0, 5);

    const residents = firstFiveResidents.map(resident => {
        return (
            <div key={resident.id} className="mini-cards">
                <img 
                    className="mini-cards-img" 
                    src={resident.image}
                    alt={resident.name} 
                />
                <p className="mini-cards-p">{resident.name}</p>
            </div>
        );
    });       

    return (       
        <Modal title={location.name} close={close}>
            <figure>
                <figcaption>
                    <p><strong>Type:</strong> {` ${location.type === "" ? 'Sin dato': location.type}`}</p>
                    <p><strong>Dimension:</strong> {location.dimension}</p>
                    <p><strong>Residents:</strong></p>
                    {residents}
                </figcaption>
            </figure>
        </Modal>
    );
}

export default LocationsModal;
