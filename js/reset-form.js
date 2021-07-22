import { marker, defaultCoord, mapCanvas, pin, createPins} from './map.js';
import {makeFilters, ALL_CHOICE} from './map-filters.js';
import {offers} from './server.js';

const SHOW_ERROR_TIME = 5000;
const KEY_ESCAPE = 27;
const bodyMain = document.querySelector('body');

const successMessage = () => {
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

const errorMessage = () => {
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
  selectTypeFilter.value = ALL_CHOICE;
  selectRoomsFilter.value = ALL_CHOICE;
  selectPriceFilter.value = ALL_CHOICE;
  selectGuestsFilter.value = ALL_CHOICE;
  selectFeaturesFilter.value = ALL_CHOICE;

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
  const styleContainer = {
    zindex: 1000,
    position: 'fixed',
    left: 0,
    top: '30%',
    right: 0,
    padding: '10px 3px',
    fontSize: '30px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    textContent: message,
  };
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = styleContainer.zindex;
  alertContainer.style.position = styleContainer.position;
  alertContainer.style.left = styleContainer.left;
  alertContainer.style.top = styleContainer.top;
  alertContainer.style.right = styleContainer.right;
  alertContainer.style.padding = styleContainer.padding;
  alertContainer.style.fontSize = styleContainer.fontSize;
  alertContainer.style.textAlign = styleContainer.textAlign;
  alertContainer.style.backgroundColor = styleContainer.backgroundColor;
  alertContainer.style.color = styleContainer.color;
  alertContainer.textContent = styleContainer.textContent;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_ERROR_TIME);
};

export { successMessage, errorMessage, resetFormData, showAlertError };
