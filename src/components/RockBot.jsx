'use client';

import { useEffect, useState } from 'react';



export function RockBot({ className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verificar si el script ya fue cargado
    const existingScript = document.querySelector('script[src*="rockbot"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://rockbot-924631262984.southamerica-west1.run.app/widget.js';
      script.defer = true;
      
      script.onload = () => {
        console.log('RockBot widget cargado exitosamente');
        setIsLoaded(true);
        
        // Debug: verificar si el widget se inicializó
        setTimeout(() => {
          const widget = document.getElementById('chat-widget');
          if (widget) {
            console.log('Widget encontrado:', widget);
            console.log('Contenido del widget:', widget.innerHTML);
            console.log('Estilos del widget:', window.getComputedStyle(widget));
            
            // Verificar si hay contenido dinámico
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                console.log('Cambio detectado en el widget:', mutation);
              });
            });
            observer.observe(widget, { childList: true, subtree: true });
          } else {
            console.error('Widget #chat-widget no encontrado en el DOM');
          }
        }, 1000);
      };
      
      script.onerror = () => {
        console.error('Error al cargar RockBot widget');
        setError('Error al cargar el script');
      };
      
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[src*="rockbot"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  // Debug visual
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`${className} relative`}>
        <div id="chat-widget" />
        <div className="fixed top-4 left-4 bg-black bg-opacity-75 text-white p-2 text-xs z-50 rounded">
          RockBot Status: {isLoaded ? '✅ Loaded' : '⏳ Loading'}
          {error && <div className="text-red-400">❌ {error}</div>}
        </div>
      </div>
    );
  }

  return <div id="chat-widget" className={className} />;
}