import React, { useContext } from 'react';
import Modal from './Modal';
import SectionContext from '../../contexts/SectionContext';

const CharacterModal = () => {  
    const {selectedCharacter, setDisplayCharacterModal} = useContext(SectionContext);

    const close = () => setDisplayCharacterModal(false);
    
    return (
        <Modal title={selectedCharacter.name} close={close}>
            <figure className="page-modals-figure">
                <img 
                    className="page-modals-figure-img"
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name} 
                />
                <figcaption className="page-modals-figcaption">
                    <p className="page-modals-figcaption-p"><strong>Type:</strong>
                        {` ${selectedCharacter.type === "" ? 
                            'No Information Available' : selectedCharacter.type}
                        `} 
                    </p>
                    <p className="page-modals-figcaption-p"><strong>Gender:</strong>
                        {` ${selectedCharacter.gender === "" ? 
                            'No Information Available' : selectedCharacter.gender}
                        `}
                    </p>
                    <p className="page-modals-figcaption-p"><strong>Specie:</strong>
                        {` ${selectedCharacter.species === "" ? 
                            'No Information Available' : selectedCharacter.species}
                        `}
                    </p>
                </figcaption>
            </figure>
        </Modal>
    );
}

export default CharacterModal;
