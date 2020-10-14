import React, {useState} from 'react';
import './App.scss';
import Header from './components/header/Header';
import MenuFilter from './components/menuFilter/MenuFilter';
import ContentContainer from './components/contentContainer/ContentContainer';
import Footer from './components/footer/Footer';

const App = () => {
	const [radio, setRadio] = useState("characters")

	return (
		<React.Fragment>
		<Header />
		<div className="main-nav-content">
			<MenuFilter radio={radio} setRadio={setRadio} />
			<ContentContainer radio={radio} />	
		</div>
		<Footer />
		</React.Fragment>
	)
};

export default App;
