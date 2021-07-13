import { sendData } from './server.js';

const formData = document.querySelector('.ad-form');
const formFieldsetHeader = document.querySelector('.ad-form-header');
const formFieldset = document.querySelectorAll('.ad-form__element');
const formMap = document.querySelector('.map__filters');
const formMapOption = document.querySelectorAll('.map__filter');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

formTimeOut.addEventListener('change', ()=>{
  formTimeIn.value=formTimeOut.value;
});

formTimeIn.addEventListener('change', ()=>{
  formTimeOut.value=formTimeIn.value;
});

const room = document.querySelector('#room_number');
const guest = document.querySelector('#capacity');
const typeHouseSelect = document.querySelector('#type');
const housePrice = document.querySelector('#price');

const minPrice = {
  flat: 1000,
  bungalow: 0,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const guestRoom = {
  1: [2],
  2: [1, 2],
  3: [0, 1, 2],
  100: [3],
};

const onRoomChange = () => {
  for (let i = 0; i < guest.options.length; i++) {
    guest.options[i].disabled = true;
  }
  for (let i = 0; i < guestRoom[room.value].length; i++) {
    guest.options[guestRoom[room.value][i]].disabled = false;
  }
  guest.selectedIndex = guestRoom[room.value][0];
};

room.addEventListener('change', onRoomChange);

const onTypeChange = () => {
  housePrice.placeholder = minPrice[typeHouseSelect.value];
  housePrice.min = minPrice[typeHouseSelect.value];
};

typeHouseSelect.addEventListener('change', onTypeChange);

const formSwitch = (toggle) => {

  for (let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = toggle;
  }

  for (let i = 0; i < formMapOption.length; i++) {
    formMapOption[i].disabled = toggle;
  }

  if (toggle === true) {
    formData.classList.add('ad-form--disabled');
    formMap.classList.add('map__filters--disabled');
    formFieldsetHeader.disabled = true;
  } else {
    formData.classList.remove('ad-form--disabled');
    formMap.classList.remove('map__filters--disabled');
    formFieldsetHeader.disabled = false;
  }
};

formData.addEventListener('submit', (evt) => {
  const formDataTemplate = new FormData (evt.target);
  evt.preventDefault();

  sendData(1, 1, formDataTemplate);
  }
);

export {formSwitch, onRoomChange};
