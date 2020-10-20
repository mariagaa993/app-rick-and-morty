import React, { useState, useRef } from 'react';
import './ContentContainer.scss';
import Characters from '../contentSection/characters/Characters';
import Locations from '../contentSection/locations/Locations';
import Episodes from '../contentSection/episodes/Episodes';


const ContentContainer = ({radio}) => {
    const [input, setInput] = useState('');
    const searchRef = useRef();
    
    const inputValue = e => setInput(e.target.value);

    const clear = () => {
        searchRef.current.value = '';
        setInput('');
    };
    
    return (
        <section className="content-container">
            <div className="content-container-search">
                <input 
                    className="input-search"        
                    type="text" 
                    ref={searchRef}
                    onChange={inputValue}
                    placeholder="Search..."/>
                <button 
                    className="clear-button" 
                    type="button"
                    onClick={clear}>
                    Clear
                </button>
            </div>
            
            {
            radio === "characters" ?
                <Characters input={input} />
            :
                null
            } 
            {
            radio === "episodes" ?
                <Episodes input={input} />
            :
                null
            } 
            {
            radio === "locations" ?
                <Locations input={input} />
            :
                null
            }    
        </section>
    );
}

export default ContentContainer;
