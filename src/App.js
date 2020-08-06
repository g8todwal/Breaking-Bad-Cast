import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Header from './Components/ui/Header';
import Search from './Components/ui/Search';
import CharacterGrid from './Components/Characters/CharacterGrid';
import './App.css';

const App = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [query, setQuery] = useState('')

	useEffect(() => {
		const fetchItems = async () =>{
			const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
			setItems(res.data);
			setIsLoading(false);
		}

		fetchItems();
	}, [query]);

	return (
		<div className="container">
	      <Header />
	      <Search getQuery={(q) => setQuery(q)} />
	      <CharacterGrid items={items} isLoading={isLoading} />
	    </div>
	);
}

export default App;
