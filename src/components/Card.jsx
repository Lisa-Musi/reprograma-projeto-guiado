import style from '../styles/components/card.module.css';

export const Card = ({
  title,
  description,
  url
}) => (
  <a href={url} target='_blank' rel="noreferrer" className={style.cardLink}>
    <div className={style.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </a>
);