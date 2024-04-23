import { useState, useEffect } from 'react'
import './App.css'
import { Buscador } from './Buscador/Buscador'
import { Carrusel } from './Carrusel/Carrusel'
import { Carrusel2 } from './Carrusel/Carrusel2'
import { Listar } from './Pages/PaginaListar/Listar'
import { Detalle } from './Pages/PaginaDetalle/MostrarDetalles'
import { Sidebar } from './Sidebar'
import { mainNavegation } from './Navegation/MainNavegation'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// const queryClient = new QueryClient()
function App() {
 

  return (

    mainNavegation()
  
  )
}

export default App
