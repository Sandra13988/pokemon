import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { Prueba } from '../Pages/PaginaListar/Prueba'
import { Detalle } from '../Pages/PaginaDetalle/Detalle'
import { NotFound } from '../Pages/NotFound'


export function MainNavegation() {


    return (
        <>
            <Routes>
                {/* <QueryClientProvider client={queryClient}> */}
                {/* <Buscador guardarPokemon={guardarPokemon}/> */}
                {/* <Carrusel/> */}
                {/* <Carrusel2/> */}
                <Route path="/" element={<Prueba />} />

                <Route path="/pokemon/:id" element={<Detalle />} />
                <Route path="*" element={<NotFound />} /> 
            </Routes>
            {/* <Sidebar /> */}
        </>
    )
}