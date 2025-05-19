import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);
    // const [nombreVariable, funcion_que_maneja_variable]
    // Estados locales por cada componente
    // El componente se vuelve a renderizar cuando el estado cambia

    //Manejo de eventos en React
    const [cart, setCart] = useState([])
    console.log(useState(0));

    return (
        <div>
            <p>Valor del contador {contador}</p>
            <button onClick={()=> setContador(contador + 1)}>Incrementar</button>
        </div>
    )

}

export default Contador;