const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'aea35f02',
      s: 'avengers',
    }
  });

  console.log(response.data);
}

fetchData();