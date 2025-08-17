'use client';
import { useEffect } from 'react';
import { Bands } from '@/components/Bands';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Playlist } from '@/components/Playlist';
import { Ticket } from '@/components/Ticket';

export default function Home() {
  useEffect(() => {
    // Evitamos duplicar el script si ya existe
    if (document.getElementById('rockbot-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'rockbot-widget-script';
    script.src = "https://rockbot-924631262984.southamerica-west1.run.app/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
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

      {/* Opción 2: si el script lo necesita */}
      <div id="chat-widget"></div>
    </>
  );
}
