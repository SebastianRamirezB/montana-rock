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
    const script = document.createElement('script');
    script.src = "https://rockbot-924631262984.southamerica-west1.run.app/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
      <div id="chat-widget"></div>

    </>
  );
}
