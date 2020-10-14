import React, {useState} from 'react';
import './ContentContainer.scss';
import Characters from '../contentSection/characters/Characters';
import Locations from '../contentSection/locations/Locations';
import Episodes from '../contentSection/episodes/Episodes';
import { useQuery, gql } from '@apollo/client';

const CharactersQuery = gql`
    {
        characters(page: 0) {
            results {
                id
                name
                image
                type
                gender
                species
            }
        }
    }
`;

const ContentContainer = ({radio}) => {
    const { loading, error, data } = useQuery(CharactersQuery);
    const [value, setValue] = useState();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const arrayData = data.characters.results;
 

    return (
        <section className="content-container">
            <div className="content-container-search">
                <input 
                    className="input-search" 
                    onChange={((e) => setValue(e.target.value))} 
                    type="text" 
                    placeholder="Search..."/>
                <button 
                    className="search-button" 
                    type="button">Clear</button>
            </div>
            
            {
                radio === "characters" ?
                    <Characters value={value} arrayData={arrayData} />
                :
                    null
            } 
            {
                radio === "locations" ?
                    <Locations />
                
                :
                    null
            } 
            {
                radio === "episodes" ?
                    <Episodes />
                :
                    null
            } 
        </section>
    );
};

export default ContentContainer;
