import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CorsExample from './components/CorsExample';
import ValidatedURL from './components/ValidatedURL';

function App() {
	const validateUrl = (url) => {
		const parsed = new URL(url, document.referrer);
		console.log(url);
		console.log(document.referrer);
		console.log(parsed);
		return ['https:', 'http:'].includes(parsed.protocol);
	};

	return (
		<div className="App">
			<h1>Security Optimization React</h1>
			<Routes>
				<Route path="/" element={<CorsExample />} />
				<Route path="/validatedurl" element={<ValidatedURL />} />
			</Routes>
			<h2>
				<Link to={validateUrl('validatedurl') && 'validatedurl'}>
					Validate URL
				</Link>
			</h2>
		</div>
	);
}

export default App;
