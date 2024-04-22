import { useQuery } from "@tanstack/react-query"



export  function usePokemonEvoluciones (numeroEvolucion, pokemonName) {
    return  useQuery({ queryKey: ["pokemon", numeroEvolucion, pokemonName], queryFn: async () => await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
         .then( res => {
           if (!res.ok) throw new Error('Error en la petición')
           const data =  res.json()
           return  data //Esto es lo que se va a la key del useQuery
         }) })
   }