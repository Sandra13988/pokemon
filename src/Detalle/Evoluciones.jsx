import { useEffect, useState } from 'react'
import { usePokemonInfoMasQuery } from '../Queries/Pokemon/infoMas'; //Foto 
import { usePokemonEvolucion } from '../Queries/Pokemon/cadenaEvolutiva';
import { usePokemonEvoluciones } from '../Queries/Pokemon/evoluciones';



export const Evoluciones = ({ url, nombre, handleClickPokemon }) => {


    const { isLoading, isError, error, data: data3 } = usePokemonEvolucion(nombre, url) // sacas cadena evolutiva


    
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

    const { data: primeraEvolucion } = usePokemonEvoluciones("Primera evolucion", evoluciones && evoluciones[0] &&  evoluciones[0].namePokemon)
    const { data: segundaEvolucion } = usePokemonEvoluciones("Segunda evolucion", evoluciones && evoluciones[1] &&  evoluciones[1].namePokemon)
    const { data: terceraEvolucion } = usePokemonEvoluciones("Tercera evolucion", evoluciones && evoluciones[2] &&  evoluciones[2].namePokemon)

    console.log(primeraEvolucion)
    console.log(segundaEvolucion)
    console.log(terceraEvolucion)

  
    if (isLoading) {
        return <h3>Cargando...</h3>
    }

    if (isError) {
        return <h3>Ha habido un error...{error.message}</h3>
    }

    
    return (
        <>
        
        {!isLoading && (
        <h2>Evoluciones</h2>,
        <div id="contenedor">
            {primeraEvolucion &&<div className="evolucionPokemon" onClick={() => handleClickPokemon( primeraEvolucion )}>
                {console.log(primeraEvolucion.id)}
                <img src={primeraEvolucion.sprites.front_default}/>
                {primeraEvolucion.name.toUpperCase()}
            </div>}
            {segundaEvolucion &&<div className="evolucionPokemon" onClick={() => handleClickPokemon( segundaEvolucion )}> 
                <img src={segundaEvolucion.sprites.front_default}/>
                {segundaEvolucion.name.toUpperCase()}
            </div>}
            {terceraEvolucion &&<div className="evolucionPokemon" onClick={() => handleClickPokemon( terceraEvolucion )}>
                <img src={terceraEvolucion.sprites.front_default}/>
                {terceraEvolucion.name.toUpperCase()}
            </div>}
        </div>
      )}
        </>
    )
}

