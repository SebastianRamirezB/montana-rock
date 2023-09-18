'use client';
import Atropos from "atropos/react"
import { ShowBand } from "./ShowBand";


export const Ticket = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <Atropos
        className="w-[800px] max-[800px]:w-[310px] h-[400px] relative  mt-28"
        activeOffset={40}
        shadowScale={1.05}
      >
        <div className="w-full h-full bg-slate-600 rounded-2xl border-[6px] flex flex-col justify-between items-center bg-[url('/images/background-1.png')]" data-atropos-offset="0">
          <header className=" w-full flex justify-end items-center h-[120px]">
            <h2 className=" mr-[40px] text-[32px]">#06134</h2>

          </header>
          <section>
            <img src="/images/logo.png" alt="" />
          </section>
          <footer className="w-full flex max-[800px]:flex-col justify-between items-center h-[120px] max-[800px]:h-auto max-[800px]:mb-24">
            <div className="h-full ml-[40px] max-[800px]:ml-0 max-[800px]:text-center  flex flex-col  justify-center">
              <p className="text-[32px] max-[800px]:text-base">23 DE SEPT. 2023</p>
              <p className="bg-[#FF8600] text-[17px] max-[800px]:text-base h-6 flex justify-center items-center">EN PENSILVANIA, CALDAS</p>
            </div>
            <ShowBand />
          </footer>
        </div>

      </Atropos>
    </section>
  )
}
