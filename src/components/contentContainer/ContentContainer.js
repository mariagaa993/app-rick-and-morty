import React, { useState, useRef, useContext} from 'react';
import './ContentContainer.scss';
import Characters from '../sections/Characters';
import Locations from '../sections/Locations';
import Episodes from '../sections/Episodes';
import InputContext from '../../contexts/InputContext';
import RadioContext from '../../contexts/RadioContext';


const ContentContainer = () => {
    const {radio} = useContext(RadioContext);
    const [input, setInput] = useState('');
    const searchRef = useRef();
    
    const inputValue = e => setInput(e.target.value);

    const clear = () => {
        searchRef.current.value = '';
        setInput('');
    };
    
    return (
        <InputContext.Provider value={{ input }}>
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
                
                { radio === "characters" ? <Characters /> : null } 
                { radio === "episodes"   ? <Episodes />   : null } 
                { radio === "locations"  ? <Locations />  : null }    
            </section>
        </InputContext.Provider>
    );
}

export default ContentContainer;
