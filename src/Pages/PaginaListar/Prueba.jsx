import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { Tipos } from '../../contextoTipo';
import { Filtro } from '../../Filtro';
import { ScrollToTopButton } from '../../Utiles/BotonSubir';
import { Busqueda } from './Busqueda';

export function Prueba() {
    const [pokemonList, setPokemonList] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100');
    const [pagina, setPagina] = useState(1);
    const { tipoSeleccionado } = useContext(Tipos)


    useEffect(() => {
        fetch(url) // Obtener los primeros 100 Pokémon
            .then(response => response.json())
            .then(data => {
                // Mapear sobre la lista de resultados de la API y hacer una solicitud para obtener la información de cada Pokémon
                const promises = data.results.map(pokemon => {
                    return fetch(pokemon.url)
                        .then(response => response.json())
                        .then(pokemonData => pokemonData); // Devolver la información completa del Pokémon
                });

                // Esperar a que se completen todas las solicitudes y establecer el estado con la información completa de cada Pokémon
                Promise.all(promises)
                    .then(pokemonData => {
                        setPokemonList(pokemonData);
                    })
                    .catch(error => {
                        console.error('Error fetching Pokémon data:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching Pokémon list:', error);
            });
    }, [url]); // Agrega la dependencia de "url" para que useEffect se ejecute cuando "url" cambie

    const colocarImagen = (tipo) => {
        switch (tipo) {
            case "bug": return '../../../src/assets/icons/bug.ico';
            case "dark": return "../../../src/assets/icons/dark.ico";
            case "dragon": return "../../../src/assets/icons/dragon.ico";
            case "electric": return "../../../src/assets/icons/electric.ico";
            case "fairy": return "../../../src/assets/icons/fairy.ico";
            case "fighting": return "../../../src/assets/icons/fighting.ico";
            case "fire": return "../../../src/assets/icons/fire.ico";
            case "flying": return "../../../src/assets/icons/flying.ico";
            case "ghost": return "../../../src/assets/icons/ghost.ico";
            case "grass": return "../../../src/assets/icons/grass.ico";
            case "ground": return "../../../src/assets/icons/ground.ico";
            case "ice": return "../../../src/assets/icons/ice.ico";
            case "normal": return "../../../src/assets/icons/normal.ico";
            case "poison": return "../../../src/assets/icons/poison.ico";
            case "psychic": return "../../../src/assets/icons/psychic.ico";
            case "rock": return "../../../src/assets/icons/rock.ico";
            case "steel": return "../../../src/assets/icons/steel.ico";
            case "water": return "../../../src/assets/icons/water.ico";
            default: return "";
        }
    };


    const handleClickSiguiente = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUrl(data.next);
                setPagina(pagina + 1);
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.error('Error fetching Pokémon list:', error);
            });
    };

    const handleClickAtras = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.previous) {
                    // No hagas nada si no hay una página anterior
                    return;
                }
                setUrl(data.previous);
                setPagina(pagina - 1);
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.error('Error fetching Pokémon list:', error);
            });
    };

    return (
        <div>
            <ul>
                <img src="src\assets\imgbin_pokemon-logo-png.png" alt=""width="500" height="300" />
                <div className='botonesInicio'>
                <Busqueda/>
                <Filtro />
                </div>
                
                <br></br>
                <div className='listado'>
                    <li>
                        <div className="lineaPokemon">
                            <strong>ID</strong>
                            <strong>NOMBRE</strong>
                            <strong>IMAGEN</strong>
                            <strong>ALUTRA</strong>
                            <strong>PESO</strong>
                            <strong>TIPO</strong>
                        </div>
                    </li>

                    {pokemonList.map((pokemon, index) => {
                        if (!tipoSeleccionado) {
                            return (
                                <li key={index}>
                                    <div className="lineaPokemon">
                                        <div># {pokemon.id}</div>
                                        <strong>{pokemon.name}</strong>
                                        <div>
                                            <Link to={`/pokemon/${pokemon.id}`}>
                                                <img src={pokemon.sprites.front_default} />
                                            </Link>
                                        </div>
                                        <div>{pokemon.height / 10} m</div>
                                        <div>{pokemon.weight / 10} Kg</div>
                                        <div>
                                            {pokemon.types.map(type => (
                                                <img key={type.type.name} src={colocarImagen(type.type.name)} alt={type.type.name} width="40" height="40" />
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            );
                        }

                        if (tipoSeleccionado && (tipoSeleccionado === pokemon.types[0].type.name || (pokemon.types[1] && tipoSeleccionado === pokemon.types[1].type.name))) {
                            return (
                                <li key={index}>
                                    <div className="lineaPokemon">
                                        <div># {pokemon.id}</div>
                                        <strong>{pokemon.name}</strong>
                                        <div>
                                            <Link to={`/pokemon/${pokemon.id}`}>
                                                <img src={pokemon.sprites.front_default} />
                                            </Link>
                                        </div>
                                        <div>{pokemon.height / 10} m</div>
                                        <div>{pokemon.weight / 10} Kg</div>
                                        <div>
                                            {pokemon.types.map(type => (
                                                <img key={type.type.name} src={colocarImagen(type.type.name)} alt={type.type.name} width="40" height="40" />
                                            ))}
                                        </div>
                                    </div>
                                </li>

                            );
                        }
                    })}
                </div>
            </ul>
            <button onClick={handleClickAtras}>{"<<<"}</button>
            <button onClick={handleClickSiguiente}>{">>>"}</button>
            <ScrollToTopButton/>
        </div>
    );
}
