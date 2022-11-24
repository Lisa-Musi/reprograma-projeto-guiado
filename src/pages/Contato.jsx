import { useState } from 'react';
import { Header } from '../components/Header';
import contatoImg from '../assets/contato.svg';
import { database } from '../service/firebase';
import { ref, push, set } from 'firebase/database';
import style from '../styles/pages/contato.module.css';

export const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleInputValueNome = (event) => {
    setNome(event.target.value);
  };

  const handleInputValueEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputValueMensagem = (event) => {
    setMensagem(event.target.value);
  };

  const handleCreateMessage = (event) => {
    event.preventDefault();
    
    const messageListRef = ref(database, 'mensagens');
    const newMessageRef = push(messageListRef);

    set(newMessageRef, {
      nome: nome,
      email: email,
      texto: mensagem
    }).then(() => {
      setEmail('');
      setNome('');
      setMensagem('');

      setSent(true);
      setError(false);
    }).catch((error) => {
      console.log(error);
      setSent(false);
      setError(true);
    });
  };

  return (
    <>
      <Header title='Contato' image={contatoImg} />
      <div className={style.formContainer}>
        <form className={style.form} onSubmit={handleCreateMessage}>
          {
            sent ? <span className={style.sentMessage}>Contato enviado!</span> : null
          }
          {
            error ? <span className={style.errorMessage}>Erro ao enviar contato</span> : null
          }
          <input 
            type='text'
            className={style.formInput}
            placeholder='Digite seu nome'
            value={nome}
            onChange={handleInputValueNome}
          />
          <input 
            type='email'
            className={style.formInput}
            placeholder='Digite seu email'
            value={email}
            onChange={handleInputValueEmail}
          />
          <textarea 
            className={style.formTextArea}
            placeholder='Digite sua mensagem'
            value={mensagem}
            onChange={handleInputValueMensagem}
          />
          <button className={style.formButton} type='submit'>Enviar mensagem</button>
        </form>
      </div>
    </>
  );
};