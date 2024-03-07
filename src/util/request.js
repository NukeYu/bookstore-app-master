import axios from 'axios';

export default function request(url, type = 'GET', data = {}) {
  const config = {
    method: type,
    url,
    data,
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error('API request error:', error);
        });
}
