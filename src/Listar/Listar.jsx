import { useEffect, useState } from 'react'


export const Listar = ({ handleClickPokemon }) => {
    const [siguientePagina, setSiguientePagina] = useState("")
    const [paginaAnterior, setPaginaAnterior] = useState("")
    const [listaPokemon, setListaPokemon] = useState([])
    const [url , setUrl] = useState("https://pokeapi.co/api/v2/pokemon-species/")

    useEffect(()=>{
        listarPokemon()
    },[url])

    const handleClickSiguiente = () =>{
        setUrl(siguientePagina)
    }

    const handleClickAtras = () =>{
        setUrl(paginaAnterior)
    }

    
  function listarPokemon() {
    const apiUrl = url;

   
    fetch(apiUrl)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Ocurrió un error al obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        setSiguientePagina(data.next)
        setPaginaAnterior(data.previous)
        console.log(data.next)
        setListaPokemon(data.results)
        
      })

      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }
  return (
    <>
   
            <ul>
                {listaPokemon.map(pokemon => {
                        return (
                            <div key={pokemon.name}>
                            <a  onClick={() => handleClickPokemon(pokemon.url)}>{pokemon.name}</a> 
                            </div>
                        )
                        
                })}
                
            </ul>
            <button onClick={() => handleClickAtras()}>{"<<<"}</button>
            <button onClick={() => handleClickSiguiente()}>{">>>"}</button>



    </>
  )

}
