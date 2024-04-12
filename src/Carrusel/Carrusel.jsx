import React, { useState, StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Carousel from "react-simply-carousel";

export const Carrusel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const arrayPokemon = [ 
    {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
    {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"},
    {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"},
    {url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"},
 ]

  return (
    <div>
      <Carousel
        containerProps={{ // Este bloque no hace falta tocarlo
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none"
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
            style: {
                backgroundImage: "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png')", // Cambia la URL por la peticion del fetch
                backgroundSize: "cover", // Ajusta el tamaño de la imagen según lo necesites
                backgroundRepeat: "no-repeat", // Ajusta la repetición de la imagen según lo necesites
                backgroundPosition: "center" // Ajusta la posición de la imagen según lo necesites
              }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{ // Flecha derecha
          children: ">",
          style: {
            background: "red",
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{ // Flecha izquierda
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={2} //Este bloque no hace falta tocarlo
        speed={400}
        centerMode
      >
        {arrayPokemon.map((item, index) => ( // Ajustar a la cantidad de evoluciones que tenga el pokemon buscado
          <div
            style={{
              
              width: 250,
              height: 300,
              border: "10px solid black",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box"
            }}
            key={index}
          >
            {index}
          </div>
        ))}
      </Carousel>
    </div>
  );
}


