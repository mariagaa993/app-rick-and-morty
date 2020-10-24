import React, { useState, useContext } from 'react';
import LocationsCards from '../cards/LocationsCards';
import PaginationButtons from '../paginationButtons/PaginationButtons';
import { useQuery, gql } from '@apollo/client';
import ContenContainerContext from '../../contexts/ContentContainerContext';
import SectionContext from '../../contexts/SectionContext';
import { BeatLoader } from 'react-spinners';

const Locations = () => {
    const {input} = useContext(ContenContainerContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState();
    const [displayLocationModal, setDisplayLocationModal] = useState(false);

    const dataQuery = gql`
    query {
        locations(page:${pageNumber}, filter:{name:"${input}"}) {
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
    }`;

    const { loading, error, data } = useQuery(dataQuery);

    if (loading) return <div className="loading"><BeatLoader loading color={'#FF8E00'}/></div>;
    if (error) return <h1 className="loading">Error!😭</h1>;
   
    return (
        <SectionContext.Provider value={{ 
            selectedLocation, 
            setSelectedLocation,
            displayLocationModal,
            setDisplayLocationModal,
            pageNumber,
            setPageNumber,
            data
            }}>
            <section className="content-section">
                <h1 className="content-section-title">Locations</h1>
                <div className="content-section-cards">
                    <LocationsCards />
                </div>
                <PaginationButtons />
            </section>
        </SectionContext.Provider>  
    );
}

export default Locations;
