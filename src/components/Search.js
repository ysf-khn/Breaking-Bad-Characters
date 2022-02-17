import { useState } from 'react';

import classes from './Search.module.css';

const Search = (props) => {
  const [text, setText] = useState('');

  const inputHandler = (e) => {
    const query = e.target.value;
    setText(query);
    props.onQuery(query);
  };

  return (
    <section>
      <form>
        <input
          type="text"
          value={text}
          onChange={inputHandler}
          placeholder="Search character..."
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
