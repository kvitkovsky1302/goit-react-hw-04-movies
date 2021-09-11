import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as MoviesApi from '../services/movies-api';

export default function HomeView() {
  const { url, path } = useRouteMatch();
  const [trendingFilms, setTrendingFilms] = useState(null);

  useEffect(() => {
    MoviesApi.fetchTrandingFilms().then(setTrendingFilms);
  }, []);

  console.log('trendingFilms', trendingFilms);
  return (
    <>
      <h1>Trending today</h1>
      {trendingFilms && (
        <ul>
          {trendingFilms.results.map(film => (
            <li key={film.id}>
              <NavLink to={`${url}/${film.id}`}>
                {film.title ? film.title : film.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
