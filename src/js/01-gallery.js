import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import 'lazysizes';

import 'lazysizes/plugins/parent-fit/ls.parent-fit';
console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryImage = onClickGalleryContainer(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImage);

function onClickGalleryContainer(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image lazyload"
        data-src="${preview}"
        alt="${description}" />
      </a>`;
    }).join('');
};

   const lightbox = new SimpleLightbox('.gallery a', {
    disableRightClick: true,
    enableKeyboard: true,
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt',
});