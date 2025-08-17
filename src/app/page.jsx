import { Bands } from '@/components/Bands'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Organize } from '@/components/Organize'
import { Playlist } from '@/components/Playlist'
import RockBotWidget from '@/components/RockBotWidget'
import { Sponsors } from '@/components/Sponsors'
import { Ticket } from '@/components/Ticket'



export default function Home() {
  return (
    <>
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto scroll-smooth">
        <Header />
      <div className="snap-center" >
        <Ticket />
      </div>
      <div className="snap-center">
        <Bands />
      </div>
      {/* <div className="snap-center">
        <Sponsors />
      </div> */}
      <div className="snap-center">
        <Playlist/>
      </div>
      <div className="snap-center max-[800px]:hidden">
        <Gallery />
      </div>
      </main>
      <RockBotWidget />
   </>
  )
}
