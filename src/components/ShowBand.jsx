import { useEffect, useState } from "react"


const bands = [
    'pez errante',
    'autopista',
    'nauj project',
    'santa pacha',
    'khimera',
    'jack n`grass',
    'lékel',
    'justine y el infortunio',
]


export const ShowBand = () => {

    const [bandNumber, setBandNumber ] = useState(0);


    useEffect(()=> {
        const interval = setInterval(
            () => {
                if (bandNumber === bands.length - 1) {
                    setBandNumber(0);
                    return;
                }
                if(bandNumber >= 0) {
                    setBandNumber(bandNumber  + 1);
                } 
            },
            2000,
        );

        return () => clearInterval(interval);
    },[bandNumber]);

  return (
    <p className="text-3xl max-[800px]:text-base mr-10 max-[800px]:mr-0">{bands[bandNumber]}</p>
  )
}
