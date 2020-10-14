import React, {useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import EpisodeModal from '../../modals/EpisodeModal';

const EpisodesQuery = gql`
    {
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

const Episodes = () => {
    const [selectedEpisode, setSelectedEpisode] = useState();
    const [displayEpisodeModal, setDisplayEpisodeModal] = useState(false);
    const { loading, error, data } = useQuery(EpisodesQuery);

    const episodeInfo = episode => {
        setSelectedEpisode(episode);
        setDisplayEpisodeModal(true);
    }
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
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
                    {
                        data.episodes.results.map(episode => {
                            return (
                                <div key={episode.id} className="card">
                                    <h3 className="card-title">{episode.name}</h3>
                                    <p className="card-paragraph">{episode.episode}</p>
                                    <button 
                                        className="card-button"
                                        onClick={() => episodeInfo(episode)}>
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

export default Episodes;
