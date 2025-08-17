'use client';

import { useEffect, useState } from 'react';



export function RockBot({ className = '' }) {
  const [initStatus, setInitStatus] = useState('loading');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const maxAttempts = 10;
    let checkInterval;

    const initializeRockBot = () => {
      const script = document.createElement('script');
      script.src = 'https://rockbot-924631262984.southamerica-west1.run.app/widget.js';
      script.defer = true;
      
      script.onload = () => {
        console.log('RockBot script cargado, esperando inicialización...');
        
        // Esperar a que RockBot se inicialice completamente
        checkInterval = setInterval(() => {
          const widget = document.getElementById('chat-widget');
          
          if (widget) {
            // Verificar si RockBot ya se inicializó (tiene contenido propio)
            const hasRockBotContent = widget.children.length > 0 && 
                                    !widget.innerHTML.includes('💬') &&
                                    widget.innerHTML.trim() !== '';
            
            if (hasRockBotContent) {
              console.log('✅ RockBot inicializado correctamente');
              setInitStatus('ready');
              clearInterval(checkInterval);
              return;
            }
            
            // Intentar diferentes métodos de inicialización
            if (attempts < maxAttempts) {
              console.log(`Intento ${attempts + 1} de inicializar RockBot...`);
              
              // Método 1: Verificar si hay una función global de inicialización
              if (window.RockBot) {
                try {
                  if (typeof window.RockBot.init === 'function') {
                    window.RockBot.init();
                  } else if (typeof window.RockBot === 'function') {
                    window.RockBot();
                  }
                } catch (error) {
                  console.log('Error intentando inicializar RockBot:', error);
                }
              }
              
              // Método 2: Verificar función de inicialización alternativa
              if (window.initRockBot && typeof window.initRockBot === 'function') {
                try {
                  window.initRockBot();
                } catch (error) {
                  console.log('Error con initRockBot:', error);
                }
              }
              
              // Método 3: Disparar eventos personalizados
              try {
                widget.dispatchEvent(new CustomEvent('rockbot:init'));
                document.dispatchEvent(new CustomEvent('DOMContentLoaded'));
              } catch (error) {
                console.log('Error disparando eventos:', error);
              }
              
              setAttempts(prev => prev + 1);
            } else {
              console.log('⚠️ RockBot no se inicializó después de múltiples intentos, usando fallback');
              setInitStatus('fallback');
              clearInterval(checkInterval);
              
              // Aplicar fallback con funcionalidad básica
              applyFallbackChat(widget);
            }
          }
        }, 2000);
      };
      
      script.onerror = () => {
        console.error('❌ Error cargando RockBot, usando fallback');
        setInitStatus('fallback');
        const widget = document.getElementById('chat-widget');
        if (widget) {
          applyFallbackChat(widget);
        }
      };
      
      document.head.appendChild(script);
    };

    const applyFallbackChat = (widget) => {
      // CSS para el chat fallback
      const style = document.createElement('style');
      style.id = 'rockbot-fallback-chat';
      style.textContent = `
        #chat-widget {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 10000 !important;
          width: 70px !important;
          height: 70px !important;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24) !important;
          border-radius: 50% !important;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4) !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: white !important;
          font-size: 30px !important;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
          border: 3px solid rgba(255, 255, 255, 0.3) !important;
        }
        
        #chat-widget:hover {
          transform: scale(1.15) rotate(5deg) !important;
          box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6) !important;
        }
        
        #chat-widget:before {
          content: "🎸" !important;
          display: block !important;
          animation: rock-spin 4s ease-in-out infinite !important;
        }
        
        #chat-widget.chat-expanded {
          width: 400px !important;
          height: 550px !important;
          border-radius: 15px !important;
          background: #1a1a2e !important;
        }
        
        #chat-widget.chat-expanded:before {
          display: none !important;
        }
        
        @keyframes rock-spin {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        
        .chat-header {
          background: linear-gradient(135deg, #ff6b6b, #ee5a24) !important;
          color: white !important;
          padding: 15px 20px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          border-radius: 15px 15px 0 0 !important;
        }
        
        .chat-body {
          background: #16213e !important;
          color: white !important;
          padding: 20px !important;
          height: calc(100% - 120px) !important;
          overflow-y: auto !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          text-align: center !important;
        }
        
        .chat-footer {
          background: #0f3460 !important;
          padding: 15px 20px !important;
          border-radius: 0 0 15px 15px !important;
          display: flex !important;
          gap: 10px !important;
        }
        
        .chat-input {
          flex: 1 !important;
          padding: 10px 15px !important;
          border: none !important;
          border-radius: 25px !important;
          background: rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          font-size: 14px !important;
        }
        
        .chat-input::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        
        .chat-send {
          padding: 10px 20px !important;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24) !important;
          border: none !important;
          border-radius: 25px !important;
          color: white !important;
          cursor: pointer !important;
          transition: transform 0.2s !important;
        }
        
        .chat-send:hover {
          transform: scale(1.05) !important;
        }
      `;
      
      if (!document.getElementById('rockbot-fallback-chat')) {
        document.head.appendChild(style);
      }

      let isExpanded = false;

      const handleClick = () => {
        if (!isExpanded) {
          // Expandir chat
          widget.classList.add('chat-expanded');
          widget.innerHTML = `
            <div class="chat-header">
              <div>
                <div style="font-weight: bold; font-size: 16px;">🎸 RockBot Chat</div>
                <div style="font-size: 12px; opacity: 0.8;">Tu asistente del festival</div>
              </div>
              <button onclick="document.getElementById('chat-widget').click()" 
                style="background: none; border: none; color: white; font-size: 20px; cursor: pointer; padding: 5px;">
                ✕
              </button>
            </div>
            <div class="chat-body">
              <div style="font-size: 60px; margin-bottom: 20px;">🤖🎸</div>
              <h3 style="margin: 0 0 10px 0; color: #ff6b6b;">¡Hey rockero!</h3>
              <p style="margin: 0; opacity: 0.9; line-height: 1.5; max-width: 300px;">
                Soy tu asistente para el festival de rock. Pregúntame sobre las bandas, 
                horarios, ubicaciones o cualquier cosa que necesites saber.
              </p>
              <div style="margin-top: 20px;">
                <button onclick="alert('¡Funcionalidad de chat en construcción! 🚧')" 
                  style="background: linear-gradient(135deg, #ff6b6b, #ee5a24); border: none; 
                         color: white; padding: 12px 24px; border-radius: 25px; cursor: pointer;
                         font-weight: bold; transition: transform 0.2s;"
                  onmouseover="this.style.transform='scale(1.05)'" 
                  onmouseout="this.style.transform='scale(1)'">
                  🎤 Empezar a chatear
                </button>
              </div>
            </div>
            <div class="chat-footer">
              <input type="text" class="chat-input" placeholder="Escribe tu mensaje aquí..." />
              <button class="chat-send">🚀</button>
            </div>
          `;
          isExpanded = true;
        } else {
          // Contraer chat
          widget.classList.remove('chat-expanded');
          widget.innerHTML = '';
          isExpanded = false;
        }
      };

      widget.removeEventListener('click', handleClick);
      widget.addEventListener('click', handleClick);
      
      console.log('💬 Chat fallback aplicado con funcionalidad básica');
    };

    // Verificar si ya existe el script
    const existingScript = document.querySelector('script[src*="rockbot"]');
    if (!existingScript) {
      initializeRockBot();
    } else {
      // El script ya existe, verificar si funciona
      setTimeout(() => {
        const widget = document.getElementById('chat-widget');
        if (widget && widget.innerHTML.trim() === '') {
          applyFallbackChat(widget);
        }
      }, 3000);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      
      const scriptToRemove = document.querySelector('script[src*="rockbot"]');
      if (scriptToRemove) scriptToRemove.remove();
      
      const styleToRemove = document.getElementById('rockbot-fallback-chat');
      if (styleToRemove) styleToRemove.remove();
    };
  }, []);

  return (
    <div className={className}>
      <div id="chat-widget" />
      {initStatus === 'loading' && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '100px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          Cargando chat... 🎸
        </div>
      )}
    </div>
  );
}