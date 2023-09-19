import { useEffect, useState } from "react"


const bands = [
    'rocka',
    'stayway',
    'moth',
    'paris sobre llamas',
    'nauj project',
    'silversmoke',
    'sunset street',
    'job',
    'electrica',
    'santa pacha',
    'constelan sound',
    'sonic barton',
    'riverstone',
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
