import React from 'react';
import './EpisodeModal.scss';
import Modal from './Modal';

const ModalEpisode = ({episode, close}) => {
    let characters;
        
    return (      
        <Modal title={episode.name} close={close}>
            <figure>
                <figcaption>
                    <p><strong>Release date:</strong> {episode.air_date}</p>
                    <p><strong>Episode:</strong> {episode.episode}</p>
                    <p><strong>Characters:</strong></p>
                
                {
                   characters = episode.characters.slice(0, 5),
                   characters.map(character => {
                        return (
                            <div key={character.id} className="mini-cards">
                                <img className="mini-cards-img" src={character.image} />
                                <p className="mini-cards-p">{character.name}</p>
                            </div>
                        );
                    })           
                }
                </figcaption>
            </figure>     
        </Modal>
    );
}

export default ModalEpisode;
