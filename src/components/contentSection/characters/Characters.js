import React, { useState } from 'react';
import './Characters.scss';
import CharacterModal from '../../modals/CharacterModal';
import { useQuery, gql } from '@apollo/client';

const Characters = ({input}) => {
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
            <div key={character.id} className="card">
                <img  
                    className="card-img" 
                    src={character.image} 
                    alt={character.name} 
                />
                <h3 className="card-title">{character.name}</h3>
                <button 
                    className="card-button"
                    onClick={() => characterInfo(character)}>
                    View More
                </button>
            </div>
        );
    });   
    
    return (
        <React.Fragment>
            <section className="characters">
                <h1 className="characters-title">Characters</h1>

                {
                    displayCharacterModal ?
                        <CharacterModal character={selectedCharacter} close={() => setDisplayCharacterModal(false)} />
                    :
                        null  
                }

                <div className="cards-container">
                    {dataCharacters}
                </div>
                <div className="container-buttons">
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
            </section>
        </React.Fragment>
    );
}

export default Characters;
