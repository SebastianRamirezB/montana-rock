'use client';

import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({ date = '', time = '' }) => {
    const colombiaTimeZone = 'America/Bogota';

    const parsedDeadline = useMemo(() => {
        const deadlineDate = new Date(`${date}T${time}-05:00`);
        return deadlineDate.getTime();
    }, [date, time]);

    // Inicializa el estado en null para que no se renderice en el servidor.
    const [timeRemaining, setTimeRemaining] = useState(null);

    useEffect(() => {
        // El estado se inicializa y se actualiza solo en el cliente.
        setTimeRemaining(parsedDeadline - Date.now());

        const interval = setInterval(() => {
            setTimeRemaining(parsedDeadline - Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, [parsedDeadline]);

    // Si timeRemaining aún es null, no renderizamos nada para evitar el error.
    if (timeRemaining === null) {
        return null;
    }

    const formatTime = (value) => {
        const formattedValue = Math.floor(value);
        return formattedValue < 10 ? `0${formattedValue}` : formattedValue;
    };

    if (timeRemaining <= 0) {
        return (
            <p className="text-center text-2xl font-bold">
                ¡El tiempo ha terminado! 🎉
            </p>
        );
    }

    return (
        <div className="flex gap-8">
            {Object.entries({
                Días: timeRemaining / DAY,
                Horas: (timeRemaining / HOUR) % 24,
                Minutos: (timeRemaining / MINUTE) % 60,
                Segundos: (timeRemaining / SECOND) % 60,
            }).map(([label, value]) => (
                <p key={label} className="">
                    <span className="flex flex-col justify-center items-center text-3xl max-[800px]:text-base rounded-lg">
                        <span>{formatTime(value)}</span>
                        <span className="lowercase">{label}</span>
                    </span>
                </p>
            ))}
        </div>
    );
};