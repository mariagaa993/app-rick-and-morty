import React, { useState } from 'react';
import EpisodeModal from '../../modals/EpisodeModal';
import { useQuery, gql } from '@apollo/client';

const Episodes = ({input}) => {
    const [selectedEpisode, setSelectedEpisode] = useState();
    const [displayEpisodeModal, setDisplayEpisodeModal] = useState(false);

    const episodeInfo = episode => {
        setSelectedEpisode(episode);
        setDisplayEpisodeModal(true);
    };

    const dataQuery = gql`
    query {
        episodes(filter:{name:"${input}"}) {
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
    }`;

    const { loading, error, data } = useQuery(dataQuery);

    if (loading) return <h1 className="loading-error">Loading...✨</h1>;
    if (error) return <h1 className="loading-error">Error!😭</h1>;
    
    const episodes = data.episodes.results;

    const dataEpisodes = episodes.map(episode => {
        return (
            <div key={episode.id} className="card">
                <h3 className="card-title">{episode.name}</h3>
                <p className="card-paragraph">{episode.episode}</p>
                <button 
                    className="card-button"
                    onClick={() => episodeInfo(episode)}>
                    View More
                </button>
            </div>      
        );
    });
    
    return (
        <React.Fragment>
            <section className="characters">
                <h1 className="characters-title">Episodes</h1>

                {
                    displayEpisodeModal ?
                        <EpisodeModal episode={selectedEpisode} close={() => setDisplayEpisodeModal(false)} />
                    :
                        null  
                }

                <div className="cards-container">
                    {dataEpisodes}
                </div>
            </section>
        </React.Fragment>
    );
}

export default Episodes;
