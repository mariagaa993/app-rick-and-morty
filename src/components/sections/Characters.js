import React, { useState, useContext } from 'react';
import CharacterModal from '../modals/CharacterModal';
import { useQuery, gql } from '@apollo/client';
import InputContext from '../../contexts/InputContext';
import PagesContext from '../../contexts/PagesContext';

const Characters = () => {
    const {input} = useContext(InputContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [displayCharacterModal, setDisplayCharacterModal] = useState(false);

    const characterInfo = character => {
        setSelectedCharacter(character);
        setDisplayCharacterModal(true);
    };

    const nextPage = () => setPageNumber(pageNumber + 1);

    const prevPage = () => setPageNumber(pageNumber - 1);

    const dataQuery = gql`
    query {
        characters(page:${pageNumber}, filter:{name:"${input}"}) {
            results {
                id
                name
                image
                type
                gender
                species
            }
        }
    }`;

    const { loading, error, data } = useQuery(dataQuery);

    if (loading) return <h1 className="loading-error">Loading...✨</h1>;
    if (error) return <h1 className="loading-error">Error!😭</h1>;
    
    const characters = data.characters.results;

    const dataCharacters = characters.map(character => {
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
    });   
    
    return (
        <PagesContext.Provider value={{ selectedCharacter, setDisplayCharacterModal }}>
            <section className="content-section">
                <h1 className="content-section-title">Characters</h1>
                <div className="content-section-cards">
                    {dataCharacters}
                </div>
                <div className="content-section-buttons">
                    <button 
                        type="button" 
                        className="prev-button" 
                        disabled={`${pageNumber === 1 ? 'disabled' : ''}`} 
                        onClick={prevPage}>
                        Prev
                    </button>
                    <button 
                        type="button"
                        className="next-button" 
                        disabled={`${pageNumber === 34 ? 'disabled' : ''}`}
                        onClick={nextPage}>
                        Next
                    </button>
                </div>
                { displayCharacterModal ? <CharacterModal /> : null }
            </section>   
        </PagesContext.Provider>    
    );
}

export default Characters;
