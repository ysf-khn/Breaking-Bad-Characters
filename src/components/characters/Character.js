import classes from './Character.module.css';

const Character = ({ item }) => {
  return (
    <li key={item.char_id}>
      <div className={classes['card-container']}>
        <div className={classes.card}>
          <div className={classes.front}>
            <img src={item.img} alt="" />
          </div>
          <div className={classes.back}>
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Alias:</strong> {item.nickname}
            </p>
            <p>{item.occuption}</p>
            <p>
              <strong>Status:</strong> {item.status}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Character;
