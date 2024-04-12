import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

export const Carrusel2 = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{ //Boton derecha
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 0,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{ //Boton izquierda
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 0,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >

        {/* Esto habra que cambiarlo por un map con 
        las imagenes que nos da el fetch del pokemon */}
        <div style={{ width: 300, height: 300,  }}>
        <a href="">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Slide 9" style={{ width: '100%', height: '100%' }} />    
        </a>
        </div>
        <div style={{ width: 300, height: 300, background: '#065535' }}>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, background: '#000000' }}>
          slide 2
        </div>
        <div style={{ width: 300, height: 300, background: '#133337' }}>
          slide 3
        </div>
        <div style={{ width: 300, height: 300, background: '#ffc0cb' }}>
          slide 4
        </div>
        <div style={{ width: 300, height: 300, background: '#ffffff' }}>
          slide 5
        </div>
        <div style={{ width: 300, height: 300, background: '#ffe4e1' }}>
          slide 6
        </div>
        <div style={{ width: 300, height: 300, background: '#008080' }}>
          slide 7
        </div>
        <div style={{ width: 300, height: 300, background: '#ff0000' }}>
          slide 8
        </div>
        <div style={{ width: 300, height: 300, background: '#e6e6fa' }}>
          slide 9
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

