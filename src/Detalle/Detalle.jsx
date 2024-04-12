import { useEffect, useState } from 'react'

export const Detalle = ({ urlDetalle }) => {

  const [datosPokemon, setDatosPokemon] = useState({});
  const [datosPokemonEvolucion, setDatosPokemonEvolucion] = useState({});
  const [datosPokemonCompleto, setDatosPokemonCompleto] = useState({});
  const [urlPokemonEvolucion, setUrlPokemonEvolucion] = useState("");
  const [nombrePokemon, setNombrePokemon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    detallePokemon();
  }, [urlDetalle]);

  useEffect(() => {
    if (Object.keys(datosPokemon).length !== 0) {
      detalleEvolucion();
      detallePokemonCompleto();
    }
  }, [datosPokemon]);

  async function detallePokemon() {
    setLoading(true)
    try {
      const response = await fetch(urlDetalle); //Espera a llegar a la url
      if (!response.ok) {
        throw new Error('Ocurrió un error al obtener los datos');
      }
      const data = await response.json(); // Espera a guardar los datos en JSON
      setUrlPokemonEvolucion(data.evolution_chain.url);
      setNombrePokemon(data.name);
      setDatosPokemon(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }finally{
      setLoading(false)
    }
  }

  async function detalleEvolucion() {
    try {
      const response = await fetch(urlPokemonEvolucion);
      if (!response.ok) {
        throw new Error('Ocurrió un error al obtener los datos');
      }
      const data = await response.json();
      setDatosPokemonEvolucion(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  async function detallePokemonCompleto() {
    try {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Ocurrió un error al obtener los datos');
      }
      const data = await response.json();
      setDatosPokemonCompleto(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  return (
    <>
      {console.log(datosPokemon)}
      {console.log(datosPokemonEvolucion)}
      {console.log(datosPokemonCompleto)}

      {loading && <p>Cargando...</p>}
      {datosPokemonCompleto.types && datosPokemonCompleto.types.length > 0 && !loading &&(
        <div>
          <h3>Nº #{datosPokemon.id}</h3>
          <img src={datosPokemonCompleto.sprites.front_default } />  
          <h3>Nombre: {datosPokemon.name}</h3>
          <h3>Tipo: {datosPokemonCompleto.types.map(type => type.type.name).join(", ")}</h3>
          <h3>Altura: {datosPokemonCompleto.height}</h3>
          <h3>Descripción: {datosPokemon.flavor_text_entries[50].flavor_text}</h3>
        </div>
      )}
    </>
  )
}
