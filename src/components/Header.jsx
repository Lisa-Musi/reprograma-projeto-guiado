import style from '../styles/components/header.module.css';

export const Header = ({title, image}) => (
  <div className={style.headerContainer}>
    <h1 className={style.headerTitle}>{title}</h1>
    {
      image ? <img className={style.headerImage} src={image} /> : null
    }
  </div>
);