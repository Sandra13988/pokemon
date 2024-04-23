import { useEffect, useState } from 'react'
import { usePokemonInfoMasQuery } from '../../Queries/Pokemon/infoMas'; //Foto 
import { usePokemonEvolucion } from '../../Queries/Pokemon/cadenaEvolutiva';
import { usePokemonEvoluciones } from '../../Queries/Pokemon/evoluciones';
import { useNavigate, Link, useParams } from 'react-router-dom'


export const MostrarEvoluciones = (primeraEvolucion, segundaEvolucion, terceraEvolucion) => {


    return (
        <>

        <h2>Evoluciones</h2>,
        <div id="contenedor">
            {primeraEvolucion && <div className="evolucionPokemon" onClick={() => navegar(`/pokemon/${primeraEvolucion.id}`)}>
                <img src={primeraEvolucion.sprites.front_default}/>
                {primeraEvolucion.name.toUpperCase()}
            </div>}
            {segundaEvolucion && <div className="evolucionPokemon" onClick={() => navegar(`/pokemon/${segundaEvolucion.id}`)}> 
                <img src={segundaEvolucion.sprites.front_default}/>
                {segundaEvolucion.name.toUpperCase()}
            </div>}
            {terceraEvolucion && <div className="evolucionPokemon" onClick={() => navegar(`/pokemon/${terceraEvolucion.id}`)}>
                <img src={terceraEvolucion.sprites.front_default}/>
                {terceraEvolucion.name.toUpperCase()}
            </div>}
        </div>

        </>
    )
}