import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  disableLoadMore,
  enableLoadMore,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
let page = 1;
let query = '';
let totalHits = 0;
form.addEventListener('submit', async event => {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Search field cannot be empty',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    showLoadMore();

    if (page * 15 >= totalHits) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  disableLoadMore();
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    enableLoadMore();
    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (page * 15 >= totalHits) {
      hideLoadMore();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again!',
    });
  } finally {
    hideLoader(0);
  }
});
