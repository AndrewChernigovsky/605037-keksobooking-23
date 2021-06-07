function getRandomNumber(begin, end) {
  let result = 0;
  if (begin >= 0 && begin < end) {
    result = Math.random() * ((end - begin) + 1);
    return result;
  } else {
    return 'неправильные аргументы';
  }
}

function getRandomNumber1(begin, end, number) {
  let result = 0;
  if (begin >= 0 && begin < end) {
    result = Math.random() * ((end - begin) + 1);
    return result.toFixed(number);
  } else {
    return 'неправильные аргументы';
  }
}

// // eslint-disable-next-line no-console
// console.log(getRandomNumber(1, 700));
// // eslint-disable-next-line no-console
// console.log(getRandomNumber1(1, 700, 1));


// let author = {
//   avatar: 'img',
// };

// let offer = {
//   title: 'Keks',

//   address: '{{location.x}}, {{location.y}}',

//   price: 0,

//   type: 'palace',

//   rooms: 2,

//   guests: 30,

//   checkin: '12:00',

//   checkout: '12:00',

//   features: 'wifi',

//   description: 'goodflat',

//   photos: 'jpg',
// };


const OFFER = {
  author: { avatar: 'img/avatars/user0${xx}.png' },
  offer: {
    title: ['Title', 'Keks', 'Keksobooking', 'Feature'],
    address: '{{location.x}}, {{location.y}}',
    price: 0,
    type: 'palace',
    rooms: 2,
    guests: 30,
    checkin: '12:00',
    checkout: '12:00',
    features: 'wifi',
    description: 'econom',
    photos: 'jpg',
  },

  location: {
    lat: '23423',
    lng: 'sfsf',
  },
};

function makeAuthor() {
  const xx = getRandomNumber1(1, 8, 0);
  OFFER.author.avatar = `img/avatars/user0${xx}.png`;
}

makeAuthor();

function makeOffer() {
  const xtitle = ['Comic', 'Keks', 'Cow and cowboy', 'Feature'];
  const randomTitle = Math.floor(Math.random() * xtitle.length);
  OFFER.offer.title = `${xtitle[randomTitle]}`;
  console.log(xtitle, xtitle.randomTitle);

  const xtype = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

  const xprice = getRandomNumber1(0, 100000, 2);
  OFFER.offer.price = `${xprice} P`;
  console.log(xprice);

  const randomType = Math.floor(Math.random() * xtype.length);
  OFFER.offer.type = `${xtype[randomType]}`;
  console.log(xtype);

  const xrooms = getRandomNumber1(0, 10);
  OFFER.offer.rooms = `${xrooms}`;
  console.log(xrooms);

  const xguests = getRandomNumber1(0, 100);
  OFFER.offer.guests = `${xguests}`;
  console.log(xguests);

  const xcheckin = ['12:00', '13:00', '14:00'];
  const xcheckout = ['12:00', '13:00', '14:00'];

  const randomCheckin = Math.floor(Math.random() * xcheckin.length);
  OFFER.offer.checkin = `${xcheckin[randomCheckin]}`;
  console.log(xcheckin, xcheckin.randomCheckin);

  const randomCheckout = Math.floor(Math.random() * xcheckout.length);
  OFFER.offer.checkout = `${xcheckout[randomCheckout]}`;
  console.log(xcheckout, xcheckout.randomCheckout);

  const xfeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  const randomFeatures = Math.floor(Math.random() * xfeatures.length);
  OFFER.offer.features = `${xfeatures[randomFeatures]}`;
  console.log(xfeatures, xfeatures.randomFeatures);

  const xdescription = ['business', 'econom', 'luxery'];

  const randomDescription = Math.floor(Math.random() * xdescription.length);
  OFFER.offer.description = `${xdescription[randomDescription]}`;
  console.log(xdescription, xdescription.randomDescription);

  const xphotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

  const randomPhotos = Math.floor(Math.random() * xphotos.length);
  OFFER.offer.photos = `${xphotos[randomPhotos]}`;
  console.log(xphotos, xphotos.randomPhotos);

}

makeOffer();

function makeLocation() {

  const xlat = getRandomNumber1(35.65000, 35.70000, 5);
  OFFER.location.lat = `${xlat}`;
  console.log(xlat);

  const xlng = getRandomNumber1(139.70000, 139.80000, 5);
  OFFER.location.lng = `${xlng}`;
  console.log(xlng);

}

makeLocation();
console.log(OFFER);
