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

// eslint-disable-next-line no-shadow
const getData = (onSuccess) => {
  fetch(getUrl)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      showAlertError('Произошла ошибка, попробуйте перезагрузить страницу.');
      formFilterSwitch(true);
    });
};

const sendUrl = 'https://23.javascript.pages.academy/keksobooking1';

const sendData = (onSuccessSend, onFail, formData) => {
  fetch(sendUrl, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      successMessage('onSuccessSend');
      resetFormData();
    } else {
      errorMessage('error');
    }
  });
};

getData(onSuccess);

export { offers, sendData };
