import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../contexts/AuthContext";

import styles from "./Navbar.module.css";

// Importação de imagens
import logo from "./img/logo.png"

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/login">
        <div className={styles.logo}>
          <img src={ logo }  />
        Aero <span>Status</span>
        </div>
      </NavLink>
      <ul className={styles.links_list}>
       
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
           <li>
            <NavLink
              to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
