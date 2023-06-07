import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { catchPokemon, releasePokemon, toggleFavorite } from '../../redux/store';

function PokeItem(props) {
  const { pokemon, showCatchButton, showReleaseButton, showAddToFavoritesButton } = props;
  const dispatch = useDispatch();
  const [isCaught, setIsCaught] = useState(false);

  const handleCatch = () => {
    if (!isCaught) {
      dispatch(catchPokemon(props.pokemon));
      setIsCaught(true);
    }
  };

  const handleRelease = () => {
    dispatch(releasePokemon(pokemon));
  };

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(pokemon));
  };
  return (
    <li>
      <Link to={`/pokemon/${pokemon.name}`}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name}</p>
      </Link>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>
      {showCatchButton &&  <button onClick={handleCatch} disabled={isCaught}>
        {isCaught ? 'Caught' : 'Catch'}
      </button>}
      {showReleaseButton && <button onClick={handleRelease}>Release</button>}
      {showAddToFavoritesButton && (
        <button onClick={handleAddToFavorites}>  {pokemon.favorite ? 'Remove Favorite' : 'Add Favorite'}
        </button>
      )}
    </li>
  );
}

export default PokeItem;
