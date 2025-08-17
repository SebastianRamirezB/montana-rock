import { Bands } from '@/components/Bands';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Playlist } from '@/components/Playlist';
import { Ticket } from '@/components/Ticket';
import { RockBot } from '@/components/RockBot';

export default function Home() {
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

      {/* RockBot con posicionamiento personalizado */}
      <RockBot className="fixed bottom-6 right-6 z-50" />
      
      {/* O si prefieres que esté siempre visible en móviles: */}
      {/* <RockBot className="fixed bottom-4 right-4 z-50 max-[800px]:bottom-2 max-[800px]:right-2" /> */}
    </>
  );
}