
import { makeFullOffer } from './data.js';

makeFullOffer();

const offers = makeFullOffer();

const makeCard = function (data) {
  let type;
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.cloneNode(true);

  const avatarContainer = card.querySelector('.popup__avatar');
  avatarContainer.src = data.author.avatar;
  avatarContainer.alt = 'Аватар пользователя';

  if (avatarContainer.textContent.length === 0) {
    avatarContainer.remove();
  } else {
    avatarContainer.textContent;
  }

  const cardTitle = card.querySelector('.popup__title');
  cardTitle.textContent = data.offer.title;

  if (cardTitle.textContent.length === 0) {
    cardTitle.remove();
  } else {
    cardTitle.textContent;
  }

  const cardAddress = card.querySelector('.popup__text--address');
  cardAddress.textContent = data.offer.address;

  if (cardAddress.textContent.length === 0) {
    cardAddress.remove();
  } else {
    cardAddress.textContent;
  }

  const cardPrice = card.querySelector('.popup__text--price');
  cardPrice.textContent = data.offer.price + ' ₽/ночь';
  if (cardPrice.textContent.length === 7) {
    cardPrice.remove();
  } else {
    cardPrice.textContent;
  }

  switch (data.offer.type) {
    case 'flat': type = 'Квартира'; break;
    case 'bungalow': type = 'Бунгало'; break;
    case 'house': type = 'Дом'; break;
    case 'palace': type = 'Дворец'; break;
    case 'hotel': type = 'Отель'; break;
  }

  const cardType = card.querySelector('.popup__type');
  cardType.textContent = type;

  if (cardType.textContent.length === 0) {
    cardType.remove();
  } else {
    cardType.textContent;
  }

  const cardCapacity = card.querySelector('.popup__text--capacity');
  cardCapacity.textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';

  if (cardCapacity.textContent.length === 23) {
    cardCapacity.remove();
  } else {
    cardCapacity.textContent;
  }

  const cardTime = card.querySelector('.popup__text--time');
  cardTime.textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;

  if (cardTime.textContent.length === 22) {
    cardTime.remove();
  } else {
    cardTime.textContent;
  }

  const featureContainer = card.querySelector('.popup__features');
  featureContainer.innerHTML = '';

  for (let i = 0; i < data.offer.features.length; i++) {
    const element = document.createElement('li');
    element.classList.add('popup__feature', 'popup__feature--' + data.offer.features[i]);
    featureContainer.appendChild(element);

    if (featureContainer.textContent.length === 0) {
      featureContainer.remove();
    } else {
      featureContainer.textContent;
    }
  }

  const cardDescription = card.querySelector('.popup__description');
  cardDescription.textContent = data.offer.description;

  if (cardDescription.textContent.length === 0) {
    cardDescription.remove();
  } else {
    cardDescription.textContent;
  }

  const photosContainer = card.querySelector('.popup__photos');
  photosContainer.innerHTML = '';
  for (let i = 0; i < data.offer.photos.length; i++) {
    const element = document.createElement('img');
    element.classList.add('popup__photo');
    element.style.width = '45px';
    element.style.height = '40px';
    element.alt = 'Фотография жилья';
    photosContainer.appendChild(element);
    element.src = data.offer.photos[i];

    if (photosContainer[i] === 0) {
      photosContainer.remove();
    } else {
      photosContainer.textContent;
    }
  }

  return card;
};

const insertElement = function (element, section) {
  const srcNode = document.querySelector(section);
  srcNode.appendChild(element);
};

export { makeCard, offers, insertElement };
