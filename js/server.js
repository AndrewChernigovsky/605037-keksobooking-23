import { createPins } from './map.js';
import {
  successMessage,
  errorMessage,
  resetFormData,
  showAlertError
} from './reset-form.js';
import { formFilterSwitch } from './form.js';
import { makeFilters } from './map-filters.js';

let offers;
const getUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const onSuccess = (ads) => {
  offers = ads;
  createPins(makeFilters(offers));
  formFilterSwitch(false);
};

const getData = () => {
  fetch(getUrl)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      showAlertError('Произошла ошибка, попробуйте перезагрузить страницу.');
      formFilterSwitch(true);
    });
};

const sendUrl = 'https://23.javascript.pages.academy/keksobooking';

const sendData = (formData) => {
  fetch(sendUrl, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      successMessage();
      resetFormData();
    } else {
      errorMessage();
    }
  });
};

getData(onSuccess);

export { offers, sendData };
