import React, { useState, useRef, useContext} from 'react';
import './ContentContainer.scss';
import Characters from '../sections/Characters';
import Locations from '../sections/Locations';
import Episodes from '../sections/Episodes';
import ContenContainerContext from '../../contexts/ContentContainerContext';
import AppContext from '../../contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const ContentContainer = () => {
    const {radio} = useContext(AppContext);
    const [input, setInput] = useState('');
    const searchRef = useRef();
    
    const inputValue = e => setInput(e.target.value);

    const clear = () => {
        searchRef.current.value = '';
        setInput('');
    };
    
    return (
        <ContenContainerContext.Provider value={{ input }}>
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
                        <FontAwesomeIcon icon={faTrash} style={{marginLeft: '5px'}} />
                    </button>
                </div>
                
                { radio === "characters" ? <Characters /> : null } 
                { radio === "episodes"   ? <Episodes />   : null } 
                { radio === "locations"  ? <Locations />  : null }    
            </section>
        </ContenContainerContext.Provider>
    );
}

export default ContentContainer;
