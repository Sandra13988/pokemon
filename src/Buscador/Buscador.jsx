import { useEffect, useState } from 'react'
import { Formulario } from './Formulario'

export const Buscador = ({ guardarPokemon, guardarEvoluciones }) => {

  const [datoFormulario, setDatoFormulario] = useState("")
  const [datoPokemon, setDatoPokemon] = useState({})
  const [nombre, setNombre] = useState("")
  const [datoEvolucion, setDatoEvolucion] = useState({})
  const [urlEvolucion, setUrlEvolucion] = useState("")

  useEffect(() => {
    buscarPokemon(datoFormulario.dato)
  }, [datoFormulario])

  useEffect(() => {
    buscarEvolucion()
  }, [nombre])


  const recogerDato = (datoFormulario) => {
    setDatoFormulario(datoFormulario)
  }

  function buscarPokemon(datoFormulario) {
    // URL de la API que deseas consultar
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + datoFormulario;

    // Realizar la solicitud GET a la API
    fetch(apiUrl)
      .then(response => {
        console.log(response)
        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error('Ocurrió un error al obtener los datos');
        }
        // Convertir la respuesta a formato JSON
        return response.json();
      })
      .then(data => {
        // Manipular los datos obtenidos de la API
        guardarPokemon(data)
        setNombre(data.name)
        setUrlEvolucion(data.evolution_chain.url)
        console.log(data)

      })

      .catch(error => {
        // Capturar y manejar errores
        console.error('Error al obtener los datos:', error);
      });
  }
    //Trae toda el grupo evolutivo (Ejemplo id3: charmander, charmeleon y charizard)
    //chain.evolves_to.length = numero de evoluciones
    //chain.species.url = 1º pokemon,  chain.evolves_to[0].species.url = resto de pokemon
        
        //Hay que construir un objeto con todas las direcciones de las
        //evoluciones para volver a hacer una peticion y traer su info

        //const chain = "chain." /  const evolucion = "chain_evolves_to[0]." const url = species.url
        //1º Solo chain.species.url -> 
        //2º chain_evolves_to[0].species.url
        //3º chain_evolves_to[0].chain_evolves_to.species.url

        
       

        // const grupo = [{url: data.chain.species.url}]
        // console.log(chain.evolves_to.length)
        // chain.evolves_to[0].species.url
        // chain.evolves_to[0].evolves_to[0].species.url


        // guardarEvoluciones(grupo)
  return (
    <>
      <Formulario recogerDato={recogerDato} />
    </>
  )

}
