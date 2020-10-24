import React, { useContext } from 'react';
import './Menu.scss';
import AppContext from '../../contexts/AppContext';

const Menu = () => {    
    const {radio, setRadio} = useContext(AppContext);

    return (    
        <nav className="menu-filter">
            <h2 className="menu-filter-title">Filters</h2>
            <ul className="menu-filter-ul">
                <li>
                    <input 
                        type="radio" 
                        checked={radio === "characters"} 
                        value="characters" 
                        onChange={(e) => setRadio(e.target.value)} 
                    />  Characters 🙂
                </li>
                <li>
                    <input 
                        type="radio" 
                        checked={radio === "episodes"} 
                        value="episodes" 
                        onChange={(e) => setRadio(e.target.value)} 
                    />  Episodes 🤩
                </li>
                <li>
                    <input 
                        type="radio" 
                        checked={radio === "locations"} 
                        value="locations" 
                        onChange={(e) => setRadio(e.target.value)} 
                    />  Locations 📍
                </li>
            </ul>
        </nav>  
    );
}

export default Menu;
