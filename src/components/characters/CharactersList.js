import Character from './Character';
import classes from './CharactersList.module.css';

const CharactersList = (props) => {
  return (
    <>
      {props.isLoading && <h3>Loading...</h3>}
      {!props.isLoading && (
        <ul>
          {props.characters.map((character) => (
            <Character key={character.char_id} item={character} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CharactersList;
