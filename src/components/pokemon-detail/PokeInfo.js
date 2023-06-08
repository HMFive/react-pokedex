import typeColor from '../../typeColor';

const PokemonInfo = ({ pokemonDetails }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{pokemonDetails.name}</h1>
      <img
        src={pokemonDetails.sprites.front_default}
        alt={pokemonDetails.name}
        className="mx-auto mb-4 w-64 h-64 mb-3 my-2 rounded-full bg-neutral-100 dark:bg-slate-200 shadow-lg"
      />
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <h2 className="text-lg font-bold mt-4">Abilities:</h2>
      <ul className="mt-4 flex justify-center">
        {pokemonDetails.abilities.map((ability) => (
          <li
            key={ability.ability.name}
            className="inline-block text-md font-medium px-2 py-0.5 my-2 mx-2 rounded-full"
            style={{ backgroundColor: '#F87171' }}
          >
            {ability.ability.name}
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-bold mt-4">Stats:</h2>
      <ul>
        {pokemonDetails.stats.map((stat) => (
          <li key={stat.stat.name} className="flex items-center">
            <div className="w-20 mr-2">{stat.stat.name}:</div>
            <div className="w-60 h-4 bg-gray-200 rounded">
              <div
                className="h-full bg-red-400 rounded"
                style={{ width: `${(stat.base_stat / 255) * 100}%` }}
              ></div>
            </div>
            <div className="ml-2">{stat.base_stat}</div>
          </li>
        ))}
      </ul>
      <ul className="mt-4 flex justify-center">
        {pokemonDetails.types.map((type) => (
          <span
            key={type.type.name}
            className={`${typeColor[type.type.name]} uppercase text-md font-medium mr-2 px-2.5 py-0.5 rounded-full`}
          >
            {type.type.name}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default PokemonInfo;
