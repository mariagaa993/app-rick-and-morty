import React, { useState, useContext } from 'react';
import CharactersCards from '../cards/CharactersCards';
import PaginationButtons from '../paginationButtons/PaginationButtons';
import { useQuery, gql } from '@apollo/client';
import ContenContainerContext from '../../contexts/ContentContainerContext';
import SectionContext from '../../contexts/SectionContext';
import { BeatLoader } from 'react-spinners';

const Characters = () => {
    const {input} = useContext(ContenContainerContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [displayCharacterModal, setDisplayCharacterModal] = useState(false);

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

    if (loading) return <div className="loading"><BeatLoader loading color={'#FF8E00'}/></div>;
    if (error) return <h1 className="loading">Error!😭</h1>;
    
    return (
        <SectionContext.Provider value={{ 
            selectedCharacter,
            setSelectedCharacter,
            displayCharacterModal,
            setDisplayCharacterModal,
            pageNumber,
            setPageNumber, 
            data
            }}>
            <section className="content-section">
                <h1 className="content-section-title">Characters</h1>
                <div className="content-section-cards">
                    <CharactersCards />
                </div>
                <PaginationButtons />            
            </section>   
        </SectionContext.Provider>    
    );
}

export default Characters;
