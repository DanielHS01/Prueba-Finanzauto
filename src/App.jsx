import { useState, useEffect } from "react";
import { FaRegTrashCan, FaFilePen, FaEye } from "react-icons/fa6";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: { "app-id": "63473330c1927d386ca6a3a5" },
    })
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);

  const handleView = (id) => {
    fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: { "app-id": "63473330c1927d386ca6a3a5" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res.data));

  };

  return (
    <div>
      <h1>Módulo de Consulta y Registro de Usuarios al Sistema</h1>
      <section className="search">
        <input type="text" placeholder="Id a Buscar" />
        <button className="create">Crear Usuario</button>
      </section>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombres y Apellidos</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>
                <img src={user.picture} alt={user.firstName} height="50px" />
              </td>
              <td>
                <button>
                  <FaRegTrashCan />
                </button>
                <button>
                  <FaFilePen />
                </button>
                <button onClick={handleView(user.id)}>
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        {user ? (
          <div>
            <p>Id</p>
            <p>{user.id}</p>
            <p>Title</p>
            <p>{user.title}</p>
            <p>Nombre Completo</p>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>Foto</p>
            <p>{user.picture}</p>
            <p>Genero</p>
            <p>{user.gender}</p>
            <p>Correo</p>
            <p>{user.email}</p>
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
}

export default App;
