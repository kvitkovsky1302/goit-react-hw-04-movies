const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '6b0c9b8deb92f323af1b7d5a326653d8';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrandingFilms() {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`,
  );
}

export function fetchFilmKeyWord() {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  );
}

export function fetchFilmFullInfo(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchActors(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchFilmReviews(movieId) {
  return fetchWithErrorHandling(`
${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
}
