import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as MoviesApi from '../../services/movies-api';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState(null);
  console.log('trendingFilms', trendingFilms);

  useEffect(() => {
    MoviesApi.fetchTrandingFilms().then(setTrendingFilms);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendingFilms && (
        <ul>
          {trendingFilms.map(film => (
            <li key={film.id}>
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
