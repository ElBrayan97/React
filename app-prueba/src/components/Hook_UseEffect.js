import { useState } from "react";

export default function Semaforohooks() {
    const [semaforo, setSemaforo] = useState(false);

    const cambiarSemaforo = () => {
        setSemaforo(!semaforo);
    }

    return (
        <div>
            <p>El semaforo se encuentra en {semaforo ? "Rojo" : "Verde"}</p>
            <button type="submit" onClick={cambiarSemaforo}>
                Semaforo
            </button>
        </div>
    )
}