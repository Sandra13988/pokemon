import { Link } from 'react-router-dom';

export function NotFound() {
    

    return (
        <div>
            <h2>Pagina no encontrada</h2>
            <img src="../../src/assets/imgbin_pokemon-png.png" alt=""  width="260" height="300" />
            <Link to={`/`}><button>Volver</button></Link>
        </div>
    );
}
