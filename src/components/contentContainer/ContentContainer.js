import React from 'react';
import './ContentContainer.scss';
import Characters from '../contentSection/characters/Characters';
import Locations from '../contentSection/locations/Locations';
import Episodes from '../contentSection/episodes/Episodes';
import { useQuery, gql } from '@apollo/client';

const dataQuery = gql`
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
        locations {
            results {
                id
                name
                type
                dimension
                residents {
                    id
                    name
                    image
                }
            }
        }
    }
`;

const ContentContainer = ({radio}) => {
    const { loading, error, data } = useQuery(dataQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    const characters = data.characters.results;
    const episodes = data.episodes.results;
    const locations = data.locations.results; 

    return (
        <section className="content-container">
            {
                radio === "characters" ?
                    <Characters characters={characters} />
                :
                    null
            } 
            {
                radio === "episodes" ?
                    <Episodes episodes={episodes} />
                :
                    null
            }
            {
                radio === "locations" ?
                    <Locations locations={locations} />
                
                :
                    null
            }  
        </section>
    );
}

export default ContentContainer;
