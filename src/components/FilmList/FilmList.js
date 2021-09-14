import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './FilmList.module.css';

export default function FilmList({ imagePage }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <ul className={styles.fimsList}>
      {imagePage?.length > 0 &&
        imagePage.map(film => (
          <li key={film.id} className={styles.filmItem}>
            <Link
              to={{ pathname: `${url}/${film.id}`, state: { from: location } }}
            >
              {film.title ? film.title : film.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
