//componente react -> rafc + tab

import { HookUseEffect } from "./typescript/HookUseEffect";
//import { Contador } from "./typescript/Contador";

//import { Funciones } from "./typescript/Funciones";
//import { Interface } from "./typescript/Interface";
//import { TiposBasicos } from "./typescript/TiposBasicos";

export const App = () => {
  return (
    <div className='mt-2'>
      <h1>
        Introducion   a React con Typescript</h1>
        <hr />
        {/*<TiposBasicos/>*/}
        {/* <Interface/> */}
        {/* Funciones */}
       {/*  <Contador/> */}
       <HookUseEffect/>

    </div>
  )
}

export default App;