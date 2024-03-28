export default function Card({ pokemon }) {
  return (
    <>
      <div className="card">
        <div className="img-wrapper">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="card-info">
          <p>{pokemon.name}</p>
        </div>
      </div>
    </>
  );
}
