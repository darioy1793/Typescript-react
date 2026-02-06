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
    //opcion 1
    /* const itemUsuario = (users: Usuario) => { */
    //opcion 2

    const itemUsuario = ({first_name,last_name,email,avatar}: Usuario) => {
        return (
              <tr>
                  <td><img src={avatar} alt={first_name} style={{width:50, borderRadius:8}} /></td>
                  <td>{first_name} {last_name}</td>
                  <td>{email}</td>
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
                {users.map((users: Usuario)=>itemUsuario(users))
                }
            </tbody>
        </table>
    </div>
  )
}
