import {createPins} from './map.js';
import {successMessage, errorMessage, resetFormData} from './ShowMessageError.js';
import {formFilterSwitch} from './form.js';


let offers;
const getUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const onSuccess = (ads) => {
    createPins(ads);
    offers = ads;
    formFilterSwitch(false);
};

const getData = (onSuccess) => {
    fetch(getUrl)
        .then((response) => response.json())
        .then((ads) => {
            onSuccess(ads);
        })
        .catch ((error) => {
            // showMessage('error');
        });
};

const sendUrl = 'https://23.javascript.pages.academy/keksobooking';

const sendData = (onSuccessSend, onFail, formData) => {
    fetch(sendUrl,
        {
        method: 'POST',
        body: formData,
    },
        )
        .then((response) =>
        {
          if (response.ok) {
            // successMessage('onSuccessSend');
            successMessage('onSuccessSend');
            resetFormData();
        } else {
            errorMessage('error');
        }
            }
        );
}

getData(onSuccess);

export {offers, sendData};