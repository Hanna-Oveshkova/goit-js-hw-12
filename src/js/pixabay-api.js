import axios from 'axios';
const API_KEY = '55034566-ab7afa6b701fa9ca43cfdd5cc';
const BASE_URL = 'https://pixabay.com/api/';
export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return response.data;
}
