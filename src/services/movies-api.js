import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '6b0c9b8deb92f323af1b7d5a326653d8';

export function fetchTrandingFilms() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.data.results);
}

export function fetchFilmKeyWord(query) {
  return axios
    .get(`${BASE_URL}/3/search/movie?query=${query}&page=1&api_key=${API_KEY}`)
    .then(res => res.data.results);
}

export function fetchFilmFullInfo(movieId) {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`)
    .then(res => res.data);
}

export function fetchActors(movieId) {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(res => res.data);
}

export function fetchFilmReviews(movieId) {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(res => res.data.results);
}
