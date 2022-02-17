import CharactersList from './components/characters/CharactersList';
import Header from './components/Header';
import Search from './components/Search';

import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);

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

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const queryHandler = (queryValue) => {
    setQuery(queryValue);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header />
      <Search onQuery={queryHandler} />
      <CharactersList characters={currentCharacters} isLoading={isLoading} />
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
