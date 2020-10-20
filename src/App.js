import React, { useState, Fragment} from 'react';
import './App.scss';
import './components/sections/SectionStyles.scss';
import './components/modals/PageModals.scss';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import ContentContainer from './components/contentContainer/ContentContainer';
import Footer from './components/footer/Footer';
import Radio from './contexts/RadioContext';

const App = () => {
	const [radio, setRadio] = useState("characters")

	return (
		<Fragment>
			<Header />
			<Radio.Provider value={{ radio, setRadio }} >
				<div className="main-nav-content">
					<Menu />
					<ContentContainer />	
				</div>
			</Radio.Provider>
			<Footer />
		</Fragment>
	);
}

export default App;
