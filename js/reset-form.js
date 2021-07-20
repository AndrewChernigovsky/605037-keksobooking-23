import { marker, defaultCoord, mapCanvas, pin, createPins} from './map.js';
import {makeFilters} from './map-filters.js';
import {offers} from './server.js';

const bodyMain = document.querySelector('body');
const SHOW_ERROR_TIME = 5000;
const KEY_ESCAPE = 27;
const Z_INDEX_ERROR_MESSAGE = 1000;
// eslint-disable-next-line no-unused-vars
const successMessage = function (message) {
  const template = document.querySelector('#success').content.cloneNode(true);
  bodyMain.appendChild(template);
  const messageSuccess = document.querySelector('.success');
  messageSuccess.addEventListener('click', () => {
    document.querySelector('.success').remove();
  });

  function onSuccessClose(evt) {
    if (evt.keyCode === KEY_ESCAPE) {
      document.querySelector('.success').remove();
      window.removeEventListener('keydown', onSuccessClose);
    }
  }

  window.addEventListener('keydown', onSuccessClose);
};
// eslint-disable-next-line no-unused-vars
const errorMessage = (typeMessage) => {
  const templateModal = document
    .querySelector('#error')
    .content.querySelector('.error');
  const modalElement = templateModal.cloneNode(true);

  const onModalEscKeydown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      modalElement.remove();
      document.removeEventListener('keydown', onModalEscKeydown);
    }
  };

  modalElement.addEventListener('click', () => {
    modalElement.remove();
  });
  document.addEventListener('keydown', onModalEscKeydown);
  bodyMain.appendChild(modalElement);
};

const resetFormData = () => {
  const formDataFilter = document.querySelector('.map__filters');
  const selectTypeFilter = document.querySelector('#housing-type');
  const selectPriceFilter = document.querySelector('#housing-price');
  const selectRoomsFilter = document.querySelector('#housing-rooms');
  const selectGuestsFilter = document.querySelector('#housing-guests');
  const selectFeaturesFilter = document.querySelector('#housing-features');
  formDataFilter.reset();
  selectTypeFilter.value = 'any';
  selectRoomsFilter.value = 'any';
  selectPriceFilter.value = 'any';
  selectGuestsFilter.value = 'any';
  selectFeaturesFilter.value = 'any';

  const inputAddress = document.querySelector('#address');
  const selectRooms = document.querySelector('#room_number');
  const selectCapacity = document.querySelector('#capacity');
  const formData = document.querySelector('.ad-form');
  formData.reset();
  selectRooms.value = '1';
  selectCapacity.value = '1';
  inputAddress.value = `${defaultCoord.lat.toFixed(
    5,
  )} , ${defaultCoord.lng.toFixed(5)}`;
  mapCanvas.closePopup();
  marker.setLatLng(defaultCoord);
};

const button = document.querySelector('.ad-form__reset');
button.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetFormData();
  pin.clearLayers();
  createPins(makeFilters(offers));
});

const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = Z_INDEX_ERROR_MESSAGE;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = '30%';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'black';
  alertContainer.style.color = 'white';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_ERROR_TIME);
};

export { successMessage, errorMessage, resetFormData, showAlertError };
