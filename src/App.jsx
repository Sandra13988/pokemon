import { useState, useEffect } from 'react'
import './App.css'
import { MainNavegation } from './Navegation/MainNavegation'
import { Prueba } from './Pages/PaginaListar/Prueba'
import { TipoProvider } from './contextoTipo'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// const queryClient = new QueryClient()
function App() {


  return (
    <>
    <TipoProvider>
      <MainNavegation />
    </TipoProvider>
      
    </>
  )
}

export default App
