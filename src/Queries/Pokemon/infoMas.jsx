import { useQuery } from "@tanstack/react-query"



export async function usePokemonInfoMasQuery (pokemonName) {
    return  useQuery({ queryKey: ["pokemon", "infoMas", pokemonName], queryFn: async () => await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
         .then(async res => {
           if (!res.ok) throw new Error('Error en la petición')
           const data = await res.json()
           return await data //Esto es lo que se va a la key del useQuery
         }) })
   }