import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as MoviesApi from '../../services/movies-api';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState(null);

  useEffect(() => {
    MoviesApi.fetchTrandingFilms().then(setTrendingFilms);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendingFilms && (
        <ul className={styles.fimsList}>
          {trendingFilms.map(film => (
            <li key={film.id} className={styles.filmItem}>
              <Link to={`/movies/${film.id}`}>
                {film.title ? film.title : film.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
