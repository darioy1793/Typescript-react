import { useEffect, useState } from "react";

export const HookUseEffect = () => {
    // hook useState permite cambiar el estado de un componente funcional
    const [valor, setvalor] = useState<boolean>(false);

    const cambiarValor = (): void =>{
        setvalor(!valor);
    }
    //useEffect: sirve para ejecutar  codigo en segundo plano  en los componentes funcionales
    //1. se monta o se carga el componente (siempre se ejecuta)
    //2. si exixte una lista de dependencias, cuando alguna de las dependencias cambia (se ejecuta)
useEffect(() => {
  console.log("Desde el useEffect");
}, [valor]) //[] corchete vacio no tiene dependencias, solo se ejecuta cuando se monta el componente
//eliminiar los corchetes para q se ejecute el hook cada vez q haya un cambio en el componente
    
  return (
    <div>
        <h1>HookUseEffect</h1>
        <button className="btn btn-primary" onClick={cambiarValor}>Cambiar Valor</button>
    </div>
  )
}
