import { Link, useRouteMatch } from 'react-router-dom';
import styles from './FilmList.module.css';

export default function FilmList({ imagePage }) {
  const { url } = useRouteMatch();

  return (
    <ul className={styles.fimsList}>
      {imagePage?.length > 0 &&
        imagePage.map(film => (
          <li key={film.id} className={styles.filmItem}>
            <Link to={`${url}/${film.id}`}>
              {film.title ? film.title : film.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
