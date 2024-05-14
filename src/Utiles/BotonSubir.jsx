import React, { useState, useEffect } from 'react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario se ha desplazado hacia abajo 400px
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para desplazarse al principio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Animación de desplazamiento suave
    });
  };

  return (
    <div className='botonTop'>
    <button
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      🔝
    </button>
    </div>
  );
}


