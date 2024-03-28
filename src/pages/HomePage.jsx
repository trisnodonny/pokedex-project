import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/fetchPokemon";
import Preload from "../components/Preload";
import Card from "../components/Card";
import axios from "axios";

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const { data, isPending, error } = fetchPokemon(url);
  const [pokemonDetails, setPokemonDetails] = useState([])

  const pokemons = data?.results || [];

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const details = []
        for (let pokemon of pokemons) {
          const pokemonResponse = await axios.get(pokemon.url);
          const pokemonData = pokemonResponse.data
          details.push(pokemonData)
        }
        setPokemonDetails(details)
      } catch (err) {
        console.log(err)
      }
    };
    fetchDetail()
  }, [pokemons]);

  return (
    <>
      {isPending ? (
        <Preload />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="container">
          <div className="card-wrapper">
            {pokemonDetails.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
