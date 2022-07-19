import { Routes, Route } from 'react-router-dom';
import './App.css';
import CorsExample from './components/CorsExample';
import ValidatedURL from './components/ValidatedURL';

function App() {
	return (
		<div className="App">
			<h1>Security Optimization React</h1>
			<Routes>
				<Route path="/" element={<CorsExample />} />
				<Route path="/validatedurl" element={<ValidatedURL />} />
			</Routes>
		</div>
	);
}

export default App;
