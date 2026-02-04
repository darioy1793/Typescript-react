//Crear una interfaz que define la estructura de un objeto persona
interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}  
//crear la interface direccion
interface Direccion {
    pais: string;
    ciudad: string;
    casaNumero: number;
}
    
export const Interface = () => {

     //crear objeto
    const persona: Persona = {
        nombre: 'Viviana',
        edad: 34,
        direccion: {
            pais:"ecuador",
            ciudad:"quito",
            casaNumero: 123   
        }
    }
    //acceder a las propiedades del objeto
    //persona.direccion;
    //persona.direccion.pais;
    //las interfaces no se pueden instaciar como las clases
    
  return (
    <div>
        <h3>Interfaces</h3>
    {JSON.stringify(persona )}
    </div>
  )
}
