import { useState, useEffect } from 'react';
import SearchMovies from '../SearchMovies/SearchMovies';
import FilmList from '../FilmList/FilmList';
import * as MoviesApi from '../../services/movies-api';
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [imagePage, setImagePage] = useState([]);

  useEffect(() => {
    if (searchQuery === '') return;
    MoviesApi.fetchFilmKeyWord(searchQuery).then(setImagePage);
  }, [searchQuery]);

  const formSubmitHandler = value => {
    setImagePage([]);
    setSearchQuery(value);
  };
  return (
    <>
      <SearchMovies onSubmit={formSubmitHandler} />
      <FilmList imagePage={imagePage} />
    </>
  );
}
