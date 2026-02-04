import { useState } from "react"

export const Contador = () => {
    //HOOK useState: permite crear estados en los (componentes funcionales, VARIABLES,ARREGLOS ,ETC..)
    const [contador, setcontador] = useState<number>(0);
    //Funcion que va a trabajar con el setcontador para actualizar el estado del cotador
    const cambiarContador = (numero: number): void =>{
        //llamara la funcion setcontador para actualizar el estado del contador
        setcontador( contador + numero );
    }
    //opcional 1 se utiliza la misma funcion cambiarContador para sumar y restar solo se cambia el valor del parametro numero -1
    //opcional 2
    /* //implementar la resta del contador
    const restarContador = (numero: number): void =>{
        setcontador( contador - numero );

    } */

  return (
    <div>
        <h3>Contador: <small>{contador}</small></h3>
        <button className="btn btn-primary" onClick={()=>cambiarContador(1)}>+1</button>
        &nbsp;
        
        {/* opcion 2 <button className="btn btn-primary" onClick={()=>restarContador(1)}>-1</button> */} 
        <button className="btn btn-primary" onClick={()=>cambiarContador(-1)}>-1</button> //opcional 1
    </div>
  )
}
