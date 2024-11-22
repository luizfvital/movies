const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'aea35f02',
      s: searchTerm,
    }
  });

  return response.data.Search.map(movie => ({
      poster: movie.Poster,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      imdbId: movie.imdbID
    })
  );
}


const onInput = (e) => fetchData(e.target.value);

const input = document.querySelector('input');
input.addEventListener('input', debounce(onInput)); 