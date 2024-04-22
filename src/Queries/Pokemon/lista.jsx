import { useQuery } from "@tanstack/react-query"


export function usePokemonListar  (url, pagina)  { 
  return  useQuery({ queryKey: ['pokemon', "lista", "pagina",  pagina], queryFn: async () => await fetch(url) 
       .then(  res => {
        if (!res.ok) throw new Error('Error en la petición')
        const data =   res.json()
        console.log(data)
        return  data //Esto es lo que se va a la key del useQuery
       }) })
 }