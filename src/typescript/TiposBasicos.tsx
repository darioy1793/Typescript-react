//racfc - conponete react

export const TiposBasicos = () => {
    //codigo typescript
    //tipos de datos - variables
    //cadena - string
    //let nombre: string | number = 'Viviana';
    //nombre = 34; 
    //Tipos de datos - constantes
    const nombre: string = 'Viviana';
    const edad: number = 34;
    const donanteOrganos: boolean = true;

    //Tipos de datos - arreglos
    const poderes: string[] = ["velocidad", "volar", "invisivilidad"];
    //agregar elementos al arreglo
    poderes.push('fuerza');
        
  return (
    <div>
        <h3>TiposBasicos</h3>
        {nombre},{edad},{donanteOrganos  ? 'Si es donante' : 'No es donante'}
        <br />
        {poderes.join(', ')}
    </div>
  )
}
