// Primero crea el componente RockBot
// components/RockBot.tsx
'use client';

import { useEffect } from 'react';



export function RockBot({ className = '' }) {
  useEffect(() => {
    // Verificar si el script ya fue cargado
    const existingScript = document.querySelector('script[src*="rockbot"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://rockbot-924631262984.southamerica-west1.run.app/widget.js';
      script.defer = true;
      
      script.onload = () => {
        console.log('RockBot widget cargado exitosamente');
      };
      
      script.onerror = () => {
        console.error('Error al cargar RockBot widget');
      };
      
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup al desmontar
      const scriptToRemove = document.querySelector('script[src*="rockbot"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return <div id="chat-widget" className={className} />;
}