import { useState, useEffect } from 'react';
import * as MoviesApi from '../../services/movies-api';
import styles from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    MoviesApi.fetchFilmReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  return (
    <>
      {movieReviews?.length > 0 ? (
        <>
          <h2>Review</h2>
          <ul>
            {movieReviews.map(({ id, content, author }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
