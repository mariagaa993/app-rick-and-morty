import React, { useState, Fragment} from 'react';
import './App.scss';
import './scss/Sections.scss';
import './scss/Cards.scss';
import './scss/Modals.scss';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import ContentContainer from './components/contentContainer/ContentContainer';
import Footer from './components/footer/Footer';
import AppContext from './contexts/AppContext';

const App = () => {
	const [radio, setRadio] = useState("characters")

	return (
		<Fragment>
			<Header />
			<AppContext.Provider value={{ radio, setRadio }} >
				<div className="main-nav-content">
					<Menu />
					<ContentContainer />	
				</div>
			</AppContext.Provider>
			<Footer />
		</Fragment>
	);
}

export default App;
