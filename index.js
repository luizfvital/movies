const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'aea35f02',
      s: searchTerm,
    }
  });

  console.log(response.data);
}

const debounce = (callback) => {
  let timeoutId;

  return (arg) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(arg);
    }, 1000);
  }
}

let timeoutId;
const onInput = (e) => fetchData(e.target.value);

const input = document.querySelector('input');
input.addEventListener('input', debounce(onInput)); 