
import { makeFullOffer } from './data.js';

makeFullOffer();

const offers = makeFullOffer();

const makeCard = function (data) {
  let type;
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.cloneNode(true);

  const avatarContainer = card.querySelector('.popup__avatar');

  if (data.author.avatar.length === 0) {
    avatarContainer.delete();
  } else {
    avatarContainer.src = data.author.avatar;
    avatarContainer.alt = 'Аватар пользователя';
  }

  const cardTitle = card.querySelector('.popup__title');
  cardTitle.textContent = data.offer.title;

  const cardAddress = card.querySelector('.popup__text--address');

  if (data.offer.address.length === 0) {
    cardAddress.remove();
  } else {
    cardAddress.textContent = data.offer.address;
  }

  const cardPrice = card.querySelector('.popup__text--price');

  if (data.offer.price === 0) {
    cardPrice.remove();
  } else {
    cardPrice.textContent = data.offer.price + ' ₽/ночь';
  }

  switch (data.offer.type) {
    case 'flat': type = 'Квартира'; break;
    case 'bungalow': type = 'Бунгало'; break;
    case 'house': type = 'Дом'; break;
    case 'palace': type = 'Дворец'; break;
    case 'hotel': type = 'Отель'; break;
  }

  const cardType = card.querySelector('.popup__type');


  if (data.offer.type.length === 0) {
    cardType.remove();
  } else {
    cardType.textContent = type;
  }

  const cardCapacity = card.querySelector('.popup__text--capacity');
  cardCapacity.textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';

  const cardTime = card.querySelector('.popup__text--time');
  cardTime.textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;

  const featureContainer = card.querySelector('.popup__features');
  featureContainer.innerHTML = '';

  if (data.offer.features.length === 0) {
    featureContainer.delete();
  } else {
    for (let i = 0; i < data.offer.features.length; i++) {
      const element = document.createElement('li');
      element.classList.add('popup__feature', 'popup__feature--' + data.offer.features[i]);
      featureContainer.appendChild(element);
    }
  }

  const cardDescription = card.querySelector('.popup__description');

  if (data.offer.description.length === 0) {
    cardDescription.remove();
  } else {
    cardDescription.textContent = data.offer.description;
  }

  const photosContainer = card.querySelector('.popup__photos');
  photosContainer.innerHTML = '';

  if (data.offer.photos.length === 0) {
    photosContainer.delete();
  } else {
    for (let i = 0; i < data.offer.photos.length; i++) {
      const element = document.createElement('img');
      element.classList.add('popup__photo');
      element.style.width = '45px';
      element.style.height = '40px';
      element.alt = 'Фотография жилья';
      photosContainer.appendChild(element);
      element.src = data.offer.photos[i];
    }
  }

  return card;
};

const insertElement = function (element, section) {
  const srcNode = document.querySelector(section);
  srcNode.appendChild(element);
};

export { makeCard, offers, insertElement };
