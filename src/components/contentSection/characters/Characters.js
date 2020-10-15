import React, {useState, useReducer, useRef} from 'react';
import './Characters.scss';
import CharacterModal from '../../modals/CharacterModal';
import {reducer, ACTION_FILTER} from '../../reducer/Reducer';

const Characters = ({characters}) => {
    const searchRef = useRef();
    const [data, setData] = useState(characters)
    const [state, dispatch] = useReducer(reducer, characters);
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [displayCharacterModal, setDisplayCharacterModal] = useState(false);

    const characterInfo = character => {
        setSelectedCharacter(character);
        setDisplayCharacterModal(true);
    };

    const dataCharacters = state.map(character => {
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

    const filter = (e) => {
        dispatch({
            type: ACTION_FILTER,
            payload: {
                data: characters,
                query: e.target.value
            },
        });
    };

    const clear = () => {
        searchRef.current.value = '';
    }
    
    return (
        <React.Fragment>
            <section className="characters">
                <div className="content-container-search">
                    <input 
                        className="input-search" 
                        onChange={filter} 
                        type="text" 
                        ref={searchRef}
                        placeholder="Search..."/>
                    <button 
                        className="search-button" 
                        type="button"
                        onClick={clear} >Clear
                    </button>
                </div>
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
            </section>
        </React.Fragment>
    );
}

export default Characters;
