import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as MoviesApi from '../../services/movies-api';
import image from '../../images/image-profile.png';
import styles from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState();

  useEffect(() => {
    MoviesApi.fetchActors(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    <>
      {actors?.length > 0 ? (
        <>
          <h2 className={styles.title}>Actors</h2>
          <ul className={styles.actorsList}>
            {actors.map(({ id, name, profile_path, character }) => (
              <li key={id} className={styles.actorItem}>
                <div>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={name}
                      width="100"
                      className={styles.img}
                    />
                  ) : (
                    <img
                      src={image}
                      alt={name}
                      width="100"
                      height="150"
                      className={styles.img}
                    />
                  )}
                </div>
                <h4 className={styles.name}>{name}</h4>
                {character ? (
                  <p>
                    Character: <span>{character}</span>
                  </p>
                ) : (
                  <p>
                    Character: <span>Unknown</span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Has no information about the cast</p>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
