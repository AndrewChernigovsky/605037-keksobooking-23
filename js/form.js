const formDataFilter = document.querySelector('.ad-form');
const formFieldsetHeader = document.querySelector('.ad-form-header');
const formFieldset = document.querySelectorAll('.ad-form__element');
const formMap = document.querySelector('.map__filters');
const formMapOption = document.querySelectorAll('.map__filter');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

const formTimeInChange = formTimeOut.onchage = function () {
  formTimeOut.value = formTimeIn.value;};
const formTimeOutChange = formTimeIn.onchage = function () {
  formTimeIn.value = formTimeOut.value;};

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

room.addEventListener('change', () => {

  for (let i = 0; i < guest.options.length; i++) {
    guest.options[i].disabled = true;
  }

  for (let i = 0; i < guestRoom[room.value].length; i++) {
    guest.options[guestRoom[room.value][i]].disabled = false;
  }
  guest.selectedIndex = guestRoom[room.value][0];
});

const onTypeChange = () => {
  housePrice.placeholder = minPrice[typeHouseSelect.value];
  housePrice.min = minPrice[typeHouseSelect.value];
};

typeHouseSelect.addEventListener('change', onTypeChange);

const formSwitch = (toggle) => {
  // const classFormDis = formDataFilter.classList.contains('ad-form--disabled');
  // const classFormMapDis = formDataFilter.classList.contains('map__filters--disabled');

  for (let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = toggle;
  }

  for (let i = 0; i < formMapOption.length; i++) {
    formMapOption[i].disabled = toggle;
  }

  if (toggle === true) {
    formDataFilter.classList.add('ad-form--disabled');
    formMap.classList.add('map__filters--disabled');
    formFieldsetHeader.disabled = true;
  } else {
    formDataFilter.classList.remove('ad-form--disabled');
    formMap.classList.remove('map__filters--disabled');
    formFieldsetHeader.disabled = false;
  }
};

formTimeIn.addEventListener('change', formTimeInChange);

formTimeOut.addEventListener('change', formTimeOutChange);

export { formSwitch };
