import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { usePokemonListar } from '../../Queries/Pokemon/lista';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import { usePokemonInfoMasQuery } from '../../Queries/Pokemon/infoMas';

export const Listar = ({ }) => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon-species/")
  const [pagina, setPagina] = useState(1)
  const navegar = useNavigate()
  const [urls, setUrls] = useState("")


  const handleClickSiguiente = () => {
    setUrl(data.next)
    setPagina(pagina + 1)
  }

  const handleClickAtras = () => {
    setUrl(data.previous)
    setPagina(pagina - 1)
  }


  const { data, isLoading, isError, error } = usePokemonListar(url, pagina)
  const { isLoading: isLoadingInfoMas, isError: isInfoMasError , error: infoMasError, data: infoMasData } = usePokemonInfoMasQuery()




  const sacarIdDeUrl = (url) => {
    const partes = url.split("/");
    const ultimoDigito = partes[partes.length - 2];
    return ultimoDigito
    
  }
  <Link to={`/pokemon/${sacarIdDeUrl(pokemon.species.url)}`}><a onClick={() => navegar(`/pokemon/${sacarIdDeUrl(pokemon.url)}`)}> <img src={pokemon.sprites.front_default} /></a></Link>


  console.log(data)
  console.log(infoMasData)

  if(isLoading){
    <h2>Cargando...</h2>
  }

  if(isError || !data){
    <h2>Ha habido un error ....</h2>
  }
  return (
    <>
   

      <ul>
        {data.results.map(pokemon => {
          return (
            <div key={pokemon.name}>

              <Link to={`/pokemon/${sacarIdDeUrl(pokemon.url)}`}><a onClick={() => navegar(`/pokemon/${sacarIdDeUrl(pokemon.url)}`)}>
                <div id="lineaPokemon">
                  <div id="numero"></div>
                  <div id="imagen"></div>
                  <div id="nombre">{pokemon.name}</div>
                  <div id="tipo"></div>
                </div>
              </a></Link>
            </div>
          )
        })}

      


      </ul>
      <button onClick={() => handleClickAtras()}>{"<<<"}</button>
      <button onClick={() => handleClickSiguiente()}>{">>>"}</button>

      {isError && <h3>Ha habido un error con la lista...{error.message}</h3>}

    </>
  )

}
