import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
          <ul className={styles.reviewsList}>
            {movieReviews.map(({ id, content, author }) => (
              <li key={id}>
                <h3 className={styles.author}>{author}</h3>
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

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
