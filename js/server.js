import {createPins} from './map.js';
import {successMessage, errorMessage} from './ShowMessageError.js';

let offers;
const getUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const onSuccess = (ads) => {
    createPins(ads);
    offers = ads;
    console.log(offers);
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
// const onSendData = (ads) => {
//     createPins(ads);
//     offers = ads;
//     console.log(offers);
// }

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
            successMessage('onSuccessSend');
        } else {
            errorMessage('error');
        }
            }
        );
}

getData(onSuccess);
// sendData(sendUrl, onSuccess);

// console.log(offers);

export {offers, sendData};