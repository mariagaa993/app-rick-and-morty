import React, { useState, useContext } from 'react';
import EpisodeModal from '../modals/EpisodeModal';
import { useQuery, gql } from '@apollo/client';
import InputContext from '../contexts/InputContext';
import PagesContext from '../contexts/PagesContext';

const Episodes = () => {
    const {input} = useContext(InputContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedEpisode, setSelectedEpisode] = useState();
    const [displayEpisodeModal, setDisplayEpisodeModal] = useState(false);

    const episodeInfo = episode => {
        setSelectedEpisode(episode);
        setDisplayEpisodeModal(true);
    };

    const nextPage = () => setPageNumber(pageNumber + 1);

    const prevPage = () => setPageNumber(pageNumber - 1);

    const dataQuery = gql`
    query {
        episodes(page:${pageNumber}, filter:{name:"${input}"}) {
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
            <div key={episode.id} className="content-section-cards-card">
                <h3 className="content-section-cards-card-title">{episode.name}</h3>
                <p className="content-section-cards-card-paragraph">{episode.episode}</p>
                <button 
                    className="content-section-cards-card-button"
                    onClick={() => episodeInfo(episode)}>
                    View More
                </button>
            </div>      
        );
    });
    
    return (
        <PagesContext.Provider value={{ selectedEpisode, setDisplayEpisodeModal }}>
            <section className="content-section">
                <h1 className="content-section-title">Episodes</h1>
                <div className="content-section-cards">
                    {dataEpisodes}
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
                { displayEpisodeModal ? <EpisodeModal /> : null }
            </section>
        </PagesContext.Provider>  
    );
}

export default Episodes;
