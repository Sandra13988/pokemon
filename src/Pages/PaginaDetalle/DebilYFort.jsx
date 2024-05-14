import React from 'react';
import { getMultipliers } from '../../Utiles/Multiplicadores';

export const PokemonTypeTable = ({ types }) => {
    // Obtener los multiplicadores de ataque y defensa
    const multipliers = getMultipliers(types);
    
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

    return (
        <div className='tablaDebFort'>
            <h2>Debilidades y Resistencias</h2>
            <div className='tablaDebilidades'>
                <header>
                    <div><strong>MULTIPLICADORES</strong></div>
                    <div><strong> TIPOS</strong></div>
                </header>
                <main>
                    <div class="filaDebilidad">
                        <div style={{ color: 'red' }}><strong>Super débil x4</strong></div>
                        <div>
                            {Object.entries(multipliers.defense).map(([type, multiplier]) => (
                                multiplier === 4 && <img key={type} src={colocarImagen(type)} alt={type} width="40" height="40" />
                            ))}
                        </div>
                    </div>
                    <div class="filaDebilidad">
                        <div style={{ color: 'red' }}><strong>Débil x2</strong></div>
                        <div>
                            {Object.entries(multipliers.defense).map(([type, multiplier]) => (
                                multiplier === 2 && <img key={type} src={colocarImagen(type)} alt={type} width="40" height="40" />
                            ))}
                        </div>
                    </div>
                    <div class="filaDebilidad">
                        <div style={{ color: 'green' }}><strong>Resistente x0.5</strong></div>
                        <div>
                            {Object.entries(multipliers.defense).map(([type, multiplier]) => (
                                multiplier === 0.5 && <img key={type} src={colocarImagen(type)} alt={type} width="40" height="40" />
                            ))}
                        </div>
                    </div>
                    <div class="filaDebilidad">
                        <div style={{ color: 'green' }}><strong>Super resistente x0.25</strong></div>
                        <div>
                            {Object.entries(multipliers.defense).map(([type, multiplier]) => (
                                multiplier === 0.25 && <img key={type} src={colocarImagen(type)} alt={type} width="40" height="40" />
                            ))}
                        </div>
                    </div>
                    <div class="filaDebilidad">
                        <div><strong>Inmune x0</strong></div>
                        <div>
                            {Object.entries(multipliers.defense).map(([type, multiplier]) => (
                                multiplier === 0 && <img key={type} src={colocarImagen(type)} alt={type} width="40" height="40" />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};


