const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'aea35f02',
      s: searchTerm,
    }
  });

  console.log(response.data);
}


const onInput = (e) => fetchData(e.target.value);

const input = document.querySelector('input');
input.addEventListener('input', debounce(onInput)); 