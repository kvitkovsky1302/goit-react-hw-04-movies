import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import image from '../../images/default-movie.png';
import * as MoviesApi from '../../services/movies-api';
import styles from './MovieDetailsPage.module.css';

const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Review" */),
);
const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [filmInfo, setFilmInfo] = useState({});
  const location = useLocation();

  useEffect(() => {
    MoviesApi.fetchFilmFullInfo(movieId).then(setFilmInfo);
  }, [movieId]);

  const { poster_path, title, overview, genres, release_date, vote_average } =
    filmInfo;

  return (
    <>
      <Link
        type="button"
        to={location?.state?.from ?? '/'}
        className={styles.button}
      >
        Go back
      </Link>
      {/* <button
        type="button"
        onClick={() => history.goBack()}
        className={styles.button}
      >
        Go back
      </button> */}
      <div className={styles.detailMovie}>
        <div className={styles.filmInfo}>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
              width="200"
              height="100%"
              className={styles.poster}
            />
          ) : (
            <img src={image} alt={title} width="200" height="100%" />
          )}
          <div>
            {(release_date || title) && (
              <h2 className={styles.title}>
                {title}({release_date.split('-')[0]})
              </h2>
            )}
            <p className={styles.score}>User Score: {vote_average * 10}%</p>
            <h4 className={styles.overview}>Overview</h4>
            <p className={styles.overview}>{overview}</p>
            {genres && (
              <>
                <h4 className={styles.genres}>Genres</h4>
                <ul className={styles.genresList}>
                  {genres.map(({ name, id }) => (
                    <li key={id} className={styles.genreItem}>
                      {name}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className={styles.addition}>
          <h3 className={styles.additionTitle}>Additional information</h3>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from ?? '/' },
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from ?? '/' },
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </div>
        <Suspense fallback={<p>Downloading... </p>}>
          <Route path={`${url}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${url}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Suspense>
      </div>
    </>
  );
}
