import React, {useState, useReducer} from 'react';
import EpisodeModal from '../../modals/EpisodeModal';
import {reducer, ACTION_FILTER} from '../../reducer/Reducer';

const Episodes = ({episodes}) => {
    const [state, dispatch] = useReducer(reducer, episodes);
    const [selectedEpisode, setSelectedEpisode] = useState();
    const [displayEpisodeModal, setDisplayEpisodeModal] = useState(false);

    const episodeInfo = episode => {
        setSelectedEpisode(episode);
        setDisplayEpisodeModal(true);
    };

    const dataEpisodes = state.map(episode => {
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

    const filter = (e) => {
        dispatch({
            type: ACTION_FILTER,
            payload: {
                data: episodes,
                query: e.target.value
            },
        });
    };
    
    return (
        <React.Fragment>
            <section className="characters">
                <div className="content-container-search">
                    <input 
                        className="input-search" 
                        onChange={filter} 
                        type="text" 
                        placeholder="Search..."/>
                    <button 
                        className="search-button" 
                        type="button">Clear
                    </button>
                </div>
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
