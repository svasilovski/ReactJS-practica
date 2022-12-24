import React, { useState, useEffect } from 'react';
// import '../../styles/clock.scss';

export const ClockHook = () => {
    // Valores iniciales
    const nombre = 'Martín';
    const apellidos = 'San José';

    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    
    useEffect(() => {
        const timerID = setInterval (
            () => {
                setEdad(edad + 1);
                setFecha(new Date());
            }, 1000
        );

        return () => clearInterval(timerID);
    }, [edad]);

    return (
        <div>
            <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
            <h3>{nombre} {apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    );
}
