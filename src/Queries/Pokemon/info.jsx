import { useQuery } from "@tanstack/react-query"


export function usePokemonInfoQuery  (id)  { 

  return  useQuery({ queryKey: ["pokemon", "info", "ID", id], queryFn: async () => await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
       .then(  res => {
        if (!res.ok) throw new Error('Error en la petición')
        const data =   res.json()
        console.log(data)
        return  data //Esto es lo que se va a la key del useQuery
       }) })
 }





//  import { useQuery } from "@tanstack/react-query";

// export async function fetchPokemonInfo(urlDetalle) {
//   const res = await fetch(urlDetalle);
//   if (!res.ok) throw new Error('Error en la petición');
//   return await res.json();
// }

// export function usePokemonInfoQuery(namePokemon, urlDetalle) {
//   return useQuery({
//     queryKey: ["pokemon", "info", namePokemon],
//     queryFn: () => fetchPokemonInfo(urlDetalle)
//   });
// }
