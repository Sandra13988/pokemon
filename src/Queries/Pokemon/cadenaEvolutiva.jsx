import { useQuery} from "@tanstack/react-query"



export  function usePokemonEvolucion  (id , url)  {
  return  useQuery({ queryKey: ["pokemon", "cadenaEvolutiva", id], queryFn: async () => await fetch(url)
       .then( res => {
         if (!res.ok) throw new Error('Error en la petición')
         const data =  res.json()
         return  data //Esto es lo que se va a la key del useQuery
       }) })
 }