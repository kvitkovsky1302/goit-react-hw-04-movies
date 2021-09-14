import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchMovies from '../SearchMovies/SearchMovies';
import FilmList from '../FilmList/FilmList';
import * as MoviesApi from '../../services/movies-api';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [imagePage, setImagePage] = useState([]);
  const locationQuery = useLocation().search.split('=')[1];

  useEffect(() => {
    if (searchQuery || locationQuery) {
      return MoviesApi.fetchFilmKeyWord(
        searchQuery ? searchQuery : locationQuery,
      ).then(setImagePage);
    }
  }, [locationQuery, searchQuery]);

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
