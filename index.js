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


const onInput = async (e) => {
  const movies = await fetchData(e.target.value);

  for (let movie of movies) {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}"/>
      <h2>${movie.title}<h2/>
    `;

    target.appendChild(div);
  }
}

const input = document.querySelector('input');
input.addEventListener('input', debounce(onInput)); 