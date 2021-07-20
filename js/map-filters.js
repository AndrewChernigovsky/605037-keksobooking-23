import { offers } from './server.js';
import { createPins, pin } from './map.js';
import { debounce } from './utils/debounce.js';

const formMap = document.querySelector('.map__filters');
const selectType = document.querySelector('#housing-type');
const selectPrice = document.querySelector('#housing-price');
const selectRooms = document.querySelector('#housing-rooms');
const selectGuests = document.querySelector('#housing-guests');
const DEBOUNCE_TIME = 500;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const MIN_ARRAY_LENGTH = 10;

const getFilterFeatures = (dat) => {
  const inputFeatures = formMap.querySelectorAll(
    'input[name="features"]:checked',
  );
  let rank = 0;
  let arrayFeatures = dat;

  if (inputFeatures.length > 0 && inputFeatures !== 'undefined') {
    arrayFeatures = dat.filter((e) => {
      rank = 0;
      inputFeatures.forEach((val) => {
        if (e.offer.features !== undefined) {
          if (e.offer.features.includes(val.value)) {
            rank = rank + 1;
          }
        }
      });
      return rank === inputFeatures.length;
    });
  }

  return arrayFeatures;
};

const makeFilters = (data) => {
  let arrayType = data;
  if (selectType.value !== 'any') {
    arrayType = data.filter((dat) => dat.offer.type === selectType.value);
  }

  if (selectPrice.value !== 'any') {
    arrayType = arrayType.filter((dat) => {
      switch (selectPrice.value) {
        case 'low':
          return dat.offer.price < LOW_PRICE;
          // eslint-disable-next-line no-unreachable
          break;
        case 'middle':
          return dat.offer.price >= LOW_PRICE && dat.offer.price < HIGH_PRICE;
          // eslint-disable-next-line no-unreachable
          break;
        case 'high':
          return dat.offer.price >= HIGH_PRICE;
          // eslint-disable-next-line no-unreachable
          break;
        default:
          break;
      }
    });
  }

  if (selectRooms.value !== 'any') {
    arrayType = arrayType.filter((dat) => dat.offer.rooms === Number(selectRooms.value));
  }

  if (selectGuests.value !== 'any') {
    arrayType = arrayType.filter((dat) => dat.offer.guests === Number(selectGuests.value));
  }

  arrayType = getFilterFeatures(arrayType);

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

export { makeFilters };
