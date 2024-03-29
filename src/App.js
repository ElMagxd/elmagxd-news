import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/fonts.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
