import { Header } from '../components/Header';
import style from '../styles/pages/sobre.module.css';

export const Sobre = () => (
  <>
    <Header title='Quem é Lisa Mascarenhas' image='https://github.com/Lisa-Musi.png'/>
    <p className={style.aboutText}>
      Sou uma pessoa transfeminina da Bahia, moro em salvador, tenho 26 anos e meu background é em composição musical. Estou fazendo mudança de carreira pra área de tecnologia, tendo foco em front-end, e pretendo me aventurar em programação musical e desenvolvimento de jogos também no futuro. Tenho um projeto de construir site para abrigar artigos traduzidos úteis para pessoas trans, além de ajudar a espalhar informações para a comunidade.
    </p>
  </>
);