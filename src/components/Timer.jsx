'use client';

import { useEffect, useMemo, useState } from "react";


const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, [parsedDeadline]);

    return (
        <div className="flex gap-8"> 
            {Object.entries({
                Días: time / DAY,
                Horas: (time / HOUR) % 24,
                Minutos: (time / MINUTE) % 60,
                Segundos: (time / SECOND) % 60,
            }).map(([label, value]) => (
                <div key={label} className="">
                    <div className="flex flex-col justify-center items-center text-3xl max-[800px]:text-base rounded-lg">
                        <span>{`${Math.floor(value)}`.padStart(2, "0")}</span>
                        <span className="lowercase">{label}</span> 
                    </div>
                </div>
                
            ))}
            
        </div>
    );
  }

