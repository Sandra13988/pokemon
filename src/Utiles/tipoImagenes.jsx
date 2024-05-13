export const TipoImagenes = ({ tipo }) => {
    const obtenerRutaImagen = (tipo) => {
        switch (tipo) {
            case "bug": return require('../../assets/icons/bug.ico').default;
            case "dark": return require("../../assets/icons/dark.ico").default;
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

    const rutaImagen = obtenerRutaImagen(tipo);

    return <img src={rutaImagen} alt={tipo} width="40" height="40" />;
};