'use client';
import { Bands } from '@/components/Bands';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Playlist } from '@/components/Playlist';
import { Ticket } from '@/components/Ticket';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (!document.getElementById("chat-widget")) {
      const div = document.createElement("div");
      div.id = "chat-widget";
      document.body.appendChild(div);
      console.log("Chat widget container created.");
    } else {
      console.log("Chat widget container already exists.");
    }
  }, []);

  return (
    <>
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto scroll-smooth">
        <Header />
        <div className="snap-center">
          <Ticket />
        </div>
        <div className="snap-center">
          <Bands />
        </div>
        <div className="snap-center">
          <Playlist />
        </div>
        <div className="snap-center max-[800px]:hidden">
          <Gallery />
        </div>
      </main>

      <Script
        src="https://rockbot-924631262984.southamerica-west1.run.app/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("RockBot widget script loaded successfully.");
          let attempts = 0;
          const maxAttempts = 50; // Máximo de intentos (50 * 100ms = 5 segundos)
          const interval = setInterval(() => {
            if (window.RockBot) {
              console.log("RockBot object found on window.");
              window.RockBot.init(); // Llama a la función de inicialización
              clearInterval(interval); // Detén el intervalo
            } else {
              attempts++;
              console.log("Waiting for RockBot object...");
              if (attempts >= maxAttempts) {
                console.error("RockBot object not found after maximum attempts.");
                clearInterval(interval);
              }
            }
          }, 100); // Revisa cada 100ms
        }}
        onError={(e) => {
          console.error("Failed to load RockBot widget script:", e);
        }}
      />
    </>
  );
}
