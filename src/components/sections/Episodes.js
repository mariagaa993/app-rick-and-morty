import React, { useState, useContext } from 'react';
import EpisodesCards from '../cards/EpisodesCards';
import PaginationButtons from '../paginationButtons/PaginationButtons';
import { useQuery, gql } from '@apollo/client';
import ContenContainerContext from '../../contexts/ContentContainerContext';
import SectionContext from '../../contexts/SectionContext';
import { BeatLoader } from 'react-spinners';

const Episodes = () => {
    const {input} = useContext(ContenContainerContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedEpisode, setSelectedEpisode] = useState();
    const [displayEpisodeModal, setDisplayEpisodeModal] = useState(false);

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

    if (loading) return <div className="loading"><BeatLoader loading color={'#FF8E00'}/></div>;
    if (error) return <h1 className="loading">Error!😭</h1>;
    
    return (
        <SectionContext.Provider value={{ 
            selectedEpisode,
            setSelectedEpisode,
            displayEpisodeModal,
            setDisplayEpisodeModal,
            pageNumber,
            setPageNumber, 
            data
            }}>
            <section className="content-section">
                <h1 className="content-section-title">Episodes</h1>
                <div className="content-section-cards">
                    <EpisodesCards />                    
                </div>
                <PaginationButtons />
            </section>
        </SectionContext.Provider>  
    );
}

export default Episodes;
