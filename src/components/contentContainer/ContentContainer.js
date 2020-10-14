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
        episodes  {
            results {
                id
                name
                air_date
                episode
                characters {
                    id
                    name
                    image
                }
            }
        }
    }
`;

const ContentContainer = ({radio}) => {
    const { loading, error, data } = useQuery(CharactersQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const arrayData = data.characters.results;
    const arrayData2 = data.episodes.results; 

    return (
        <section className="content-container">
            {
                radio === "characters" ?
                    <Characters arrayData={arrayData} />
                :
                    null
            } 
            {
                radio === "locations" ?
                    <Locations  />
                
                :
                    null
            } 
            {
                radio === "episodes" ?
                    <Episodes arrayData={arrayData2} />
                :
                    null
            } 
        </section>
    );
};

export default ContentContainer;
