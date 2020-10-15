import React from 'react';
import Modal from './Modal';

const ModalEpisode = ({episode, close}) => {

    const firstFiveCharacters = episode.characters.slice(0, 5);

    const characters = firstFiveCharacters.map(character => {
        return (
            <div key={character.id} className="mini-cards">
                <img 
                    className="mini-cards-img" 
                    src={character.image}
                    alt={character.name} 
                />
                <p className="mini-cards-p">{character.name}</p>
            </div>
        );
    });          
        
    return (      
        <Modal title={episode.name} close={close}>
            <figure>
                <figcaption>
                    <p><strong>Release date:</strong> {episode.air_date}</p>
                    <p><strong>Episode:</strong> {episode.episode}</p>
                    <p><strong>Characters:</strong></p>
                    {characters}
                </figcaption>
            </figure>     
        </Modal>
    );
}

export default ModalEpisode;
