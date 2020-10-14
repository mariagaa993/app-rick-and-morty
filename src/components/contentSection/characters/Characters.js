import React, {useState, useEffect} from 'react';
import './Characters.scss';
import CharacterModal from '../../modals/CharacterModal';


const Characters = ({value, arrayData}) => {
    const [mostrar, setMostrar] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [displayCharacterModal, setDisplayCharacterModal] = useState(false);

    const characterInfo = character => {
        setSelectedCharacter(character);
        setDisplayCharacterModal(true);
    };
    
    const mostrarPrincipal = () => setMostrar(arrayData);

    useEffect(() => mostrarPrincipal(), [])

    const filter = mostrar.filter(character => {
        return character.name.includes(value);
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
                    {
                        filter.map(character => {
                            return (
                                <div key={character.id} className="card">
                                    <img className="card-img" src={character.image} alt={character.name} />
                                    <h3 className="card-title">{character.name}</h3>
                                    <button 
                                        className="card-button"
                                        onClick={() => characterInfo(character)}>
                                        Ver más
                                    </button>
                                </div>
                            );
                        })
                    } 
                </div>
            </section>
        </React.Fragment>
    );
}

export default Characters;

/* 
{
                        filter.map(character => {
                            return (
                                <div key={character.id} className="card">
                                    <img className="card-img" src={character.image} alt={character.name} />
                                    <h3 className="card-title">{character.name}</h3>
                                    <button 
                                        className="card-button"
                                        onClick={() => characterInfo(character)}>
                                        Ver más
                                    </button>
                                </div>
                            );
                        })
                    } 
*/