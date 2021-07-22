import { offers } from './server.js';
import { createPins, pin } from './map.js';
import { debounce } from './utils/debounce.js';

const DEBOUNCE_TIME = 500;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const MIN_ARRAY_LENGTH = 10;
const ALL_CHOICE = 'any';
const formMap = document.querySelector('.map__filters');
const selectType = document.querySelector('#housing-type');
const selectPrice = document.querySelector('#housing-price');
const selectRooms = document.querySelector('#housing-rooms');
const selectGuests = document.querySelector('#housing-guests');

const matchPrice = (dat) => {
  switch (selectPrice.value) {
    case 'low':
      return dat.offer.price < LOW_PRICE;
    case 'middle':
      return dat.offer.price >= LOW_PRICE && dat.offer.price < HIGH_PRICE;
    case 'high':
      return dat.offer.price >= HIGH_PRICE;
    default:
      return true;
  }
};

const getFilterFeatures = (dat) => {
  const inputFeatures = formMap.querySelectorAll('input[name="features"]:checked');
  let rank = 0;

  if (inputFeatures.length > 0 && inputFeatures !== 'undefined') {
    rank = 0;
    inputFeatures.forEach((val) => {
      if (dat.offer.features !== undefined) {
        if (dat.offer.features.includes(val.value)) {
          rank = rank + 1;
        }
      }
    });
  }
  return rank === inputFeatures.length;
};


const makeFilters = (data) => {
  let arrayType = [];
  arrayType = data.filter(
    (dat) => (selectType.value === ALL_CHOICE ? true : dat.offer.type === selectType.value)
      && (matchPrice(dat))
      && (selectRooms.value === ALL_CHOICE ? true : dat.offer.rooms === Number(selectRooms.value))
      && (selectGuests.value === ALL_CHOICE ? true : dat.offer.guests === Number(selectGuests.value))
      && (getFilterFeatures(dat)),
  );

  if (arrayType.length > MIN_ARRAY_LENGTH ) {
    arrayType = arrayType.slice(0, MIN_ARRAY_LENGTH);
  }
  return arrayType;
};

formMap.addEventListener('change', () => {
  debounce(() => {
    pin.clearLayers();
    createPins(makeFilters(offers));
  }, DEBOUNCE_TIME)();
});

export { makeFilters,  ALL_CHOICE };
