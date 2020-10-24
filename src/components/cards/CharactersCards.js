import React, {Fragment, useContext} from 'react';
import CharacterModal from '../modals/CharacterModal';
import SectionContext from '../../contexts/SectionContext';

const CharactersCards = () => {
    const { 
            data, 
            setSelectedCharacter, 
            displayCharacterModal, 
            setDisplayCharacterModal 
        } = useContext(SectionContext);

    const characterInfo = character => {
        setSelectedCharacter(character);
        setDisplayCharacterModal(true);
    };

    return (
        <Fragment>
            {
                data.characters.results.map(character => {
                    return (
                        <div key={character.id} className="content-section-cards-card">
                            <img  
                                className="content-section-cards-card-img" 
                                src={character.image} 
                                alt={character.name} 
                            />
                            <h3 className="content-section-cards-card-title">{character.name}</h3>
                            <button 
                                className="content-section-cards-card-button"
                                onClick={() => characterInfo(character)}>
                                View More
                            </button>
                        </div>
                    );
                })
            } 
            { displayCharacterModal ? <CharacterModal /> : null } 
        </Fragment>
    );
}

export default CharactersCards;
