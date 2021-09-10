import { NavLink } from "react-router-dom";
const VoluntaryMenu = () => {
  return (
    <>
      <div>
        <div className="user-img">
          <img src="" alt="user pic" />
        </div>
        <details>
          <summary>Meus dados</summary>
          <NavLink to="#">Nome completo</NavLink> <br />
          <NavLink to="#">Email</NavLink> <br />
          <NavLink to="#">Telefone</NavLink>
          <button>alterar</button>
        </details>
        <hr className="divisor" />
        <NavLink to="#">Minhas Instituições</NavLink>
        <hr className="divisor" />
        <NavLink to="#">Buscar Instituições</NavLink>
        <hr className="divisor" />
      </div>
    </>
  );
};

export default VoluntaryMenu;
