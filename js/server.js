import { createPins } from './map.js';
import {
  successMessage,
  errorMessage,
  resetFormData,
  showAlertError,
} from './ShowMessageError.js';
import { formFilterSwitch } from './form.js';
import { makeFilters } from './map__filters.js';

let offers;
const getUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const onSuccess = (ads) => {
  offers = ads;
  createPins(makeFilters(offers));
  formFilterSwitch(false);
};

const getData = (onSuccess) => {
  fetch(getUrl)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch((error) => {
      showAlertError('Произошла ошибка, попробуйте перезагрузить страницу.');
      formFilterSwitch(true);
    });
};

const sendUrl = 'https://23.javascript.pages.academy/keksobooking';

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
