
import{ makeFullOffer } from './data.js';

makeFullOffer();

const offers = makeFullOffer();

const makeCard = function (data) {
  let type;
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.cloneNode(true);

  const avatarContainer = card.querySelector('.popup__avatar');
  avatarContainer.src = data.author.avatar;

  card.querySelector('.popup__title').textContent = data.offer.title;
  card.querySelector('.popup__text--address').textContent = data.offer.address;
  card.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь';
  switch (data.offer.type) {
    case 'flat': type = 'Квартира'; break;
    case 'bungalow': type = 'Бунгало'; break;
    case 'house': type = 'Дом'; break;
    case 'palace': type = 'Дворец'; break;
    case 'hotel': type = 'Отель'; break;
  }

  card.querySelector('.popup__type').textContent = type;

  card.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
  card.querySelector('.popup__text--time ').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до' + data.offer.checkout;

  const featureContainer = card.querySelector('.popup__features');
  featureContainer.innerHTML = '';

  for (let i = 0; i < data.offer.features.length; i++) {
    const element = document.createElement('li');
    element.classList.add('popup__feature', 'popup__feature--' + data.offer.features[i]);
    featureContainer.appendChild(element);
  }

  card.querySelector('.popup__description').textContent = data.offer.description;

  const photosContainer = card.querySelector('.popup__photos');
  photosContainer.innerHTML = '';
  for (let i = 0; i < data.offer.photos.length; i++) {
    const element = document.createElement('img');
    element.classList.add('popup__photo');
    element.style.width = '33%';
    element.style.height = '33%';
    photosContainer.appendChild(element);
    element.src = data.offer.photos[i];
  }
  return card;
};

const insertElement = function (element, section) {
  const srcNode = document.querySelector(section);
  srcNode.appendChild(element);
};

export {makeCard, offers, insertElement};
