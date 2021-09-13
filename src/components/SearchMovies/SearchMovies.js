import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './SearchMovies.module.css';

export default function SearchMovies({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleSearchQuery = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
    if (searchQuery === '') {
      alert('Please, enter your request!');
    }
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        onChange={handleSearchQuery}
        value={searchQuery}
        placeholder="Search movies"
      />
      <button type="submit" className={styles.searchFormButton}>
        Search
      </button>
    </form>
  );
}
