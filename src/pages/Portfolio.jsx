import { useEffect, useState, useCallback } from 'react';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import style from '../styles/pages/portfolio.module.css';

export const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/Lisa-Musi/repos')
      .then(response => response.json())
      .then(response => response.map(({
        id,
        name,
        html_url,
        description
      }) => ({
        id,
        name,
        url: html_url,
        description
      })))
      .then(setRepos);
  }, []);

  const handleSearchChange = useCallback((event) => {
    const value = event.target.value;
    setSearch(value);
  }, []);

  const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Header title='Meus repositórios do GitHub'/>
      <input
        type='text'
        placeholder='Filtrar repos'
        onChange={handleSearchChange}
        value={search}
        className={style.searchInput}
      />
      <div className={style.reposContainer}>
        {filteredRepos.map(({
          id,
          name,
          url,
          description
        }) => (
          <Card
            key={id}
            title={name}
            description={description}
            url={url}
          />
        ))}
      </div>
    </>
  );
};