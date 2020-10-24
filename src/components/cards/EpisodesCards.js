import React, {Fragment, useContext} from 'react';
import EpisodeModal from '../modals/EpisodeModal';
import SectionContext from '../../contexts/SectionContext';

const EpisodesCards = () => {
    const { 
            data, 
            setSelectedEpisode, 
            displayEpisodeModal, 
            setDisplayEpisodeModal 
        } = useContext(SectionContext);

    const episodeInfo = episode => {
        setSelectedEpisode(episode);
        setDisplayEpisodeModal(true);
    };

    return (
        <Fragment>
            {
                data.episodes.results.map(episode => {
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
                })
            } 
            { displayEpisodeModal ? <EpisodeModal /> : null } 
        </Fragment>
    );
}

export default EpisodesCards;
