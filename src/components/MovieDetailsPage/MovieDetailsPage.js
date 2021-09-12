import { useState, useEffect } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import * as MoviesApi from '../../services/movies-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [filmInfo, setFilmInfo] = useState({});
  console.log('filmInfo', filmInfo);

  useEffect(() => {
    if (!movieId || movieId === ':movieId') return;
    MoviesApi.fetchFilmFullInfo(movieId).then(setFilmInfo);
  }, [movieId]);

  const { poster_path, title, overview, genres, release_date, vote_average } =
    filmInfo;
  console.log('filmInfo', filmInfo);

  return (
    <div>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
      )}
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <p>User Score: {vote_average * 10}%</p>
      <p>{overview}</p>
      {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}

      <div>
        <p>Additional information</p>
        <NavLink to={`${url}/cast`}>Cast</NavLink>
        <NavLink to={`${url}/reviews`}>Reviews</NavLink>
      </div>

      <Route path={`${url}/cast`}>
        <Cast movieId={movieId} />
      </Route>

      <Route path={`${url}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </div>
  );
}
