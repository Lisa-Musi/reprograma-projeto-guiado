import { Link } from 'react-router-dom';
import style from '../styles/components/menu.module.css';

export const Menu = () => (
  <ul className={style.menuContainer}>
    <li className={style.menuItem}> 
      <Link className={style.menuLink} to="/">Home</Link>
    </li>
    <li className={style.menuItem}>
      <Link className={style.menuLink} to="/sobre">Sobre</Link>
    </li>
    <li className={style.menuItem}>
      <Link className={style.menuLink} to="/portfolio">Portfolio</Link>
    </li>
    <li className={style.menuItem}>
      <Link className={style.menuLink} to="/contato">Contato</Link>
    </li>
  </ul>
);