// import {getData, sendData} from './api.js';

const bodyMain = document.querySelector('body');
const formDataFilter = document.querySelector('.ad-form');
const errorTemplate = document.querySelector('#error').content;

const errorMess = errorTemplate.cloneNode(true);



const successMessage = function (message) {
    const template = document.querySelector('#success').content.cloneNode(true);
    bodyMain.appendChild(template);
const messageSuccess = document.querySelector('.success');
messageSuccess.addEventListener('click', () => {
    document.querySelector('.success').remove();
  });

window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
        document.querySelector('.success').remove();
    }
  });
};

const errorMessage = function (message) {
    const template = document.querySelector('#error').content.cloneNode(true);
    bodyMain.appendChild(template);

    const messageError = document.querySelector('.error');
    messageError.addEventListener('click', () => {
        document.querySelector('.error').remove();
      });
      window.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27) {
            document.querySelector('.error').remove();
        }
      });
};

const closeMessage = function (e) {
    if (template) {
    document.addEventListener(e.keyCode === 27);
    template.delete();
    }
};

const closeMessageClick = function () {
    document.addEventListener('onclick');
};
// const showAlert = (message) => {
//     const errorDiv = document.createElement('div');
//     errorDiv.classList.add('error');
//     errorDiv.innerHTML = errorMessage;
//     bodyMain.appendChild('errorDiv');

//     errorDiv.textContent = message;
    
//     document.body.append(alertContainer);
  
//     setTimeout(() => {
//       alertContainer.remove();
//     }, ALERT_SHOW_TIME);
//   }

// const showMessage = (onSuccess) => {
//     formDataFilter.addEventListener('submit', (evt) => {
//       evt.preventDefault();
  
//       sendData(
//         () => onSuccess(bodyMain.appendChild('successDiv')),
//         () => showAlert(bodyMain.appendChild('errorDiv')),
//         new FormData(evt.target),
//       );
//     });
//   };

export {successMessage, errorMessage};