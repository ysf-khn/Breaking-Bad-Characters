import CharactersList from './components/characters/CharactersList';
import Header from './components/Header';
import Search from './components/Search';

import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const data = await response.json();
      setCharacters(data);
      console.log(data);
      setIsLoading(false);
    };
    fetchCharacters();
  }, [query]);

  const queryHandler = (queryValue) => {
    setQuery(queryValue);
  };

  return (
    <div className="App">
      <Header />
      <Search onQuery={queryHandler} />
      <CharactersList characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
