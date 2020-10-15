import React from 'react';
import './MenuFilter.scss';

const MenuFilter = ({radio, setRadio}) => {    
    return (
        <React.Fragment>
            <nav className="menu-filter">
                <h2 className="menu-filter-title">Filters</h2>
                <ul className="menu-filter-ul">
                    <li>
                        <input 
                            type="radio" 
                            checked={radio === "characters"} 
                            value="characters" 
                            onChange={(e) => setRadio(e.target.value)} 
                        />
                        Characters 🙂
                    </li>
                    <li>
                        <input 
                            type="radio" 
                            checked={radio === "episodes"} 
                            value="episodes" 
                            onChange={(e) => setRadio(e.target.value)} 
                        />
                        Episodes 🤩
                    </li>
                    <li>
                        <input 
                            type="radio" 
                            checked={radio === "locations"} 
                            value="locations" 
                            onChange={(e) => setRadio(e.target.value)} 
                        />
                        Locations 📍
                    </li>
                </ul>
            </nav>  
        </React.Fragment> 
    );
}

export default MenuFilter;
