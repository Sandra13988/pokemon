import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { Listar } from '../Pages/PaginaListar/Listar'
import { Detalle } from '../Pages/PaginaDetalle/Detalle'
import { Sidebar } from '../Sidebar'

export function mainNavegation() {


    return (
        <>
            <Routes>
                {/* <QueryClientProvider client={queryClient}> */}
                {/* <Buscador guardarPokemon={guardarPokemon}/> */}
                {/* <Carrusel/> */}
                {/* <Carrusel2/> */}
                <Route path="/" element={<Listar />} />

                <Route path="/pokemon/:id" element={<Detalle />} />

            </Routes>
            <Sidebar />
        </>
    )
}