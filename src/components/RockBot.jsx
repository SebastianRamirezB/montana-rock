'use client';

import { useEffect } from 'react';



export function RockBot({ className = '' }) {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="rockbot"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://rockbot-924631262984.southamerica-west1.run.app/widget.js';
      script.defer = true;
      
      script.onload = () => {
        console.log('RockBot widget cargado exitosamente');
        
        // Agregar CSS básico para hacer visible el widget
        setTimeout(() => {
          const widget = document.getElementById('chat-widget');
          if (widget) {
            // Inyectar CSS básico para el widget
            const style = document.createElement('style');
            style.id = 'rockbot-fallback-styles';
            style.textContent = `
              #chat-widget {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                z-index: 10000 !important;
                width: 60px !important;
                height: 60px !important;
                background-color: #007bff !important;
                border-radius: 50% !important;
                box-shadow: 0 4px 12px rgba(0,123,255,0.4) !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                color: white !important;
                font-size: 24px !important;
                transition: transform 0.2s ease !important;
              }
              
              #chat-widget:hover {
                transform: scale(1.1) !important;
              }
              
              #chat-widget:before {
                content: "💬" !important;
                display: block !important;
              }
              
              /* Si el widget tiene contenido propio, mostrarlo */
              #chat-widget:not(:empty):before {
                display: none !important;
              }
              
              #chat-widget > * {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
              }
              
              /* Estilos para el chat expandido */
              #chat-widget.expanded {
                width: 350px !important;
                height: 500px !important;
                border-radius: 12px !important;
                background-color: white !important;
                color: #333 !important;
              }
              
              #chat-widget.expanded:before {
                display: none !important;
              }
            `;
            
            // Solo agregar el CSS si no existe ya
            if (!document.getElementById('rockbot-fallback-styles')) {
              document.head.appendChild(style);
            }

            // Agregar funcionalidad básica de click si el widget está vacío
            if (widget.innerHTML.trim() === '') {
              widget.addEventListener('click', () => {
                console.log('Widget clickeado - intentando inicializar chat');
                // Aquí puedes agregar lógica adicional si es necesaria
              });
            }

            console.log('CSS fallback aplicado al widget');
          }
        }, 1000);
      };
      
      script.onerror = () => {
        console.error('Error al cargar RockBot widget');
      };
      
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[src*="rockbot"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      
      const styleToRemove = document.getElementById('rockbot-fallback-styles');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, []);

  return <div id="chat-widget" className={className} />;
}
