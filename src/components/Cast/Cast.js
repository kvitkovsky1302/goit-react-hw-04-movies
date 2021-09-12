import { useEffect, useState } from 'react';
import * as MoviesApi from '../../services/movies-api';
import image from '../../images/image-profile.png';
import styles from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState();
  console.log('actors', actors);

  useEffect(() => {
    MoviesApi.fetchActors(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    <>
      {actors?.length > 0 ? (
        <>
          <h2>Actors</h2>
          <ul>
            {actors.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <div>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <img src={image} alt={name} />
                  )}
                </div>
                <h3>{name}</h3>
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
