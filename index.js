const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'aea35f02',
      s: searchTerm,
    }
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search.map(movie => ({
      poster: movie.Poster,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      imdbId: movie.imdbID
    })
  );
}

const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search for a movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async (e) => {
  const movies = await fetchData(e.target.value);

  resultsWrapper.innerHTML = '';

  dropdown.classList.add('is-active');

  for (let movie of movies) {
    const option = document.createElement('a');

    const imgSrc = movie.poster === 'N/A' ? '' : movie.poster;
 
    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src="${imgSrc}" alt="${movie.title}"/>
      ${movie.title}
    `;

    resultsWrapper.appendChild(option);
  }
}

input.addEventListener('input', debounce(onInput)); 