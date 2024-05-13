
import { usePokemonEvolucion } from '../../Queries/Pokemon/cadenaEvolutiva';
import { usePokemonEvoluciones } from '../../Queries/Pokemon/evoluciones';
import { useNavigate } from 'react-router-dom';


export const Evoluciones = ({ url, nombre }) => {
    const navegar = useNavigate()

    const { isLoading: isLoadingEvo, isError: isErrorEvo, error: errorEvo, data: data3 } = usePokemonEvolucion(nombre, url) // sacas cadena evolutiva



    const obtenerEvoluciones = () => { //De la cadena evolutiva sacas arrayEvoluciones = [{name: XXX, url: XXX}]
        const arrayEvoluciones = [];

        // Agrega la primera evolución al array
        arrayEvoluciones.push({
            namePokemon: data3.chain.species.name,
            urlPokemon: data3.chain.species.url

        });

        // Verifica si hay evoluciones posteriores
        if (data3.chain.evolves_to.length > 0) {
            // Agrega la segunda evolución si existe
            arrayEvoluciones.push({
                namePokemon: data3.chain.evolves_to[0].species.name,
                urlPokemon: data3.chain.evolves_to[0].species.url
            });

            // Verifica si hay una tercera evolución
            if (data3.chain.evolves_to[0].evolves_to.length > 0) {
                // Agrega la tercera evolución si existe
                arrayEvoluciones.push({
                    namePokemon: data3.chain.evolves_to[0].evolves_to[0].species.name,
                    urlPokemon: data3.chain.evolves_to[0].evolves_to[0].species.url

                });
            }
        }
        return arrayEvoluciones
    };

    const evoluciones = data3 && obtenerEvoluciones(data3) // evoluciones tiene los datos del pokemon que tiene esa evolucion name + url
    console.log(evoluciones)

    const { isLoading: isLoading1, isError: isError1, error: error1, data: primeraEvolucion } = usePokemonEvoluciones("Primera evolucion", evoluciones && evoluciones[0] && evoluciones[0].namePokemon)
    const { isLoading: isLoading2, isError: isError2, error: error2, data: segundaEvolucion } = usePokemonEvoluciones("Segunda evolucion", evoluciones && evoluciones[1] && evoluciones[1].namePokemon)
    const { isLoading: isLoading3, isError: isError3, error: error3, data: terceraEvolucion } = usePokemonEvoluciones("Tercera evolucion", evoluciones && evoluciones[2] && evoluciones[2].namePokemon)

    console.log(primeraEvolucion)
    console.log(segundaEvolucion)
    console.log(terceraEvolucion)


    if (isLoadingEvo || isLoading1 || isLoading2 || isLoading3) {
        return <h3>Cargando...</h3>
    }

    

    return (
        <>

            <h2>Evoluciones</h2>
            <div className="tablaEvoluciones">
                <div className='nombres'>
                    <div className='nombresEvoluciones'>
                        {primeraEvolucion &&<strong>{primeraEvolucion.name.toUpperCase()}</strong>}
                        {segundaEvolucion &&<strong>{segundaEvolucion.name.toUpperCase()}</strong>}
                        {terceraEvolucion &&<strong>{terceraEvolucion.name.toUpperCase()}</strong>}
                    </div>

                </div>
                <div className='imagenesEvoluciones'>
                    {primeraEvolucion && <div className="evolucionPokemon" onClick={() => navegar(`/pokemon/${primeraEvolucion.id}`)}>
                       
                        <img src={primeraEvolucion.sprites.front_default} />
                    </div>}
                    {segundaEvolucion && <div className="evolucionPokemon" onClick={() => navegar(`/pokemon/${segundaEvolucion.id}`)}>
                        <img src={segundaEvolucion.sprites.front_default} />
                    </div>}
                    {terceraEvolucion && <div className="evolucionPokemon" onClick={() => navegar(`/pokemon/${terceraEvolucion.id}`)}>
                        <img src={terceraEvolucion.sprites.front_default} />
                    </div>}
                </div>
            </div>

        </>
    )
}

