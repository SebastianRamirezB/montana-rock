import React from 'react'
import { Timer } from './Timer'

export const Header = () => {
  return (
    <header className=" fixed top-0 flex flex-col justify-center items-center w-full p-6 gap-6">
        <p className="text-2xl max-[800px]:text-base max-[800px]:text-center ">CUENTA LOS DÍAS PARA EXPERIMENTAR LA MAGIA</p>
        <Timer date="2025-08-16" time="15:00:00" />
    </header>
  )
}
