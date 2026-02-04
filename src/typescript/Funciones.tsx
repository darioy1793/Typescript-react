

export const Funciones = () => {
//Funciones return
const sumar = (): number =>{
    //llamar funcion void
    mensaje();
    return 1 + 2;
}

//Funciones con parametros
const multiplicar = (num1: number, num2: number): number =>{
    return num1 * num2;
}
//Funciones void
const mensaje = (): void =>{
    console.log('Hola Mundo');
}
  return (
    <div>
        <h3>Funciones</h3>
        <span>El resultado de la suma es: {sumar()}</span>
        <br />
        <span>El resultado de la multiplicacion es: {multiplicar(3,4)}</span>
        <br />
    </div>
  )
}
