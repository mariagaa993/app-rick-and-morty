import React, { useContext } from 'react';
import Modal from './Modal';
import SectionContext from '../../contexts/SectionContext';

const ModalEpisode = () => {
    const {selectedEpisode, setDisplayEpisodeModal} = useContext(SectionContext);

    const close = () => setDisplayEpisodeModal(false);

    const firstFiveCharacters = selectedEpisode.characters.slice(0, 5);

    const characters = firstFiveCharacters.map(character => {
        return (
            <div key={character.id} className="page-modals-figcaption-mini-cards">
                <img 
                    className="page-modals-figcaption-mini-cards-img" 
                    src={character.image}
                    alt={character.name} 
                />
                <p className="page-modals-figcaption-mini-cards-p">{character.name}</p>
            </div>
        );
    });          
        
    return (      
        <Modal title={selectedEpisode.name} close={close}>
            <figure className="page-modals-figure">
                <figcaption className="page-modals-figcaption">
                    <p className="page-modals-figcaption-p"><strong>Release date:</strong>
                        {` ${selectedEpisode.air_date === "" ? 
                            'No Information Available' : selectedEpisode.air_date}
                        `}
                    </p>
                    <p className="page-modals-figcaption-p"><strong>Episode:</strong>
                        {` ${selectedEpisode.episode === "" ? 
                            'No Information Available' : selectedEpisode.episode}
                        `}
                    </p>
                    <p className="page-modals-figcaption-p"><strong>Characters:</strong></p>
                    {characters}
                </figcaption>
            </figure>     
        </Modal>
    );
}

export default ModalEpisode;
