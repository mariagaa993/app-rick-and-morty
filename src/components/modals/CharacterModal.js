import React from 'react';
import './CharacterModal.scss';
import Modal from './Modal';

const CharacterModal = ({character, close}) => {        
    return (
        <Modal title={character.name} close={close}>
            <figure>
                <img src={character.image}/>
                <figcaption>
                    <p><strong>Type:</strong> {` ${character.type === "" ? 'Sin dato': character.type}`}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Specie:</strong> {character.species}</p>
                </figcaption>
            </figure>
        </Modal>
    );
}

export default CharacterModal;
