import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes";
import type { ListaUsuarios, Usuario } from "../interface/interfaceUsers";


export const Usuarios = () => {
    //hook usestate para guardar la lista de usuarios.permite manejar el estado de la lista de usuarios
    
    const [users, setusers] = useState<Usuario[]>([]);

    //hookk useEffect permite ejecutar codigo en segundo plano
    useEffect(() => {
        //llamar a la api
        reqResApi.get<ListaUsuarios>("/users").then(resp => {
            //console.log(resp.data.data);
            //modificar el valor de mi arreglo de usuarios con el arreglo del api
            setusers(resp.data.data);
        })
        .catch(console.log)
    }, []); 
    
    //Funcion para mostrar dinamicamente la lista de usuarios en la tabla
    const itemUsuario = (users: Usuario) => {
        return (
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
        )
    }

  return (
    <div>
        <h3>Lista de Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
