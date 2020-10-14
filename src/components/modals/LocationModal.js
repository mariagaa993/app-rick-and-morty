import React from 'react';
import './LocationModal.scss';
import Modal from './Modal';

const LocationsModal = ({location, close}) => {
    let residents;

    return (       
        <Modal title={location.name} close={close}>
            <figure>
                <figcaption>
                    <p><strong>Type:</strong> {` ${location.type === "" ? 'Sin dato': location.type}`}</p>
                    <p><strong>Dimension:</strong> {location.dimension}</p>
                    <p><strong>Residents:</strong></p>
                
                {
                   residents = location.residents.slice(0, 5),
                    residents.map(resident => {
                        return (
                            <div key={resident.id} className="mini-cards">
                                <img className="mini-cards-img" src={resident.image} />
                                <p className="mini-cards-p">{resident.name}</p>
                            </div>
                        );
                    })           
                }
                </figcaption>
            </figure>
        </Modal>
    );
}

export default LocationsModal;
