// function getRandomNumber(begin, end) {
//   let result = 0;
//   if (begin >= 0 && begin < end) {
//     result = Math.random() * ((end - begin) + 1);
//     return result;
//   } else {
//     return 'неправильные аргументы';
//   }
// }

// function getRandomNumber1(begin, end, number) {
//   let result = 0;
//   if (begin >= 0 && begin < end) {
//     result = Math.random() * ((end - begin) + 1);
//     return result.toFixed(number);
//   } else {
//     return 'неправильные аргументы';
//   }
// }

function getRandomNumber1(begin, end, number) {
  let result = 0;
  if (begin >= 0 && begin < end) {
    result = Math.random() * ((end - begin) + number);
    return result.toFixed(number);
  } else {
    return 'неправильные аргументы';
  }
}

function makeAuthor() {
  const author = {};
  const xx = getRandomNumber1(1, 8, 0);

  author.avatar = `img/avatars/user0${xx}.png`;

  return author;
}

makeAuthor();

function makeOffer() {
  const offer = {};

  const xtitle = ['Comic', 'Keks', 'Cow and cowboy', 'Feature'];
  const randomTitle = getRandomNumber1(0, xtitle.length - 1, 0);

  offer.title = xtitle[randomTitle];

  const address = `${getRandomNumber1(0, 40, 5)}, ${getRandomNumber1(0, 40, 5)}`;

  offer.address = address;

  const xprice = getRandomNumber1(0, 100000, 2);
  offer.price = xprice;

  const xtype = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const randomType = getRandomNumber1(0, xtype.length - 1, 0);

  offer.type = xtype[randomType];

  const xrooms = getRandomNumber1(0, 10, 0);
  offer.rooms = xrooms;

  const xguests = getRandomNumber1(0, 100, 0);
  offer.guests = xguests;

  const xcheckin = ['12:00', '13:00', '14:00'];
  const randomCheckin = getRandomNumber1(0, xcheckin.length - 1, 0);
  offer.checkin = xcheckin[randomCheckin];

  const xcheckout = ['12:00', '13:00', '14:00'];

  const randomCheckout = getRandomNumber1(0, xcheckout.length - 1, 0);
  offer.checkout = xcheckout[randomCheckout];

  const xfeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  const xfeaturesSlice = xfeatures.slice(0, getRandomNumber1(0, xfeatures.length, 0));

  offer.features = xfeaturesSlice;

  const xdescription = ['business', 'econom', 'luxery'];

  const randomDescription = getRandomNumber1(0, xdescription.length - 1, 0);

  offer.description = xdescription[randomDescription];

  const xphotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

  const xphotosSlice = xphotos.slice(0, getRandomNumber1(0, xphotos.length, 0));

  offer.photos = xphotosSlice;

  return offer;
}

function makeLocation() {
  const location = {};
  const xlat = getRandomNumber1(35.65000, 35.70000, 5);
  location.lat = xlat;
  const xlng = getRandomNumber1(139.70000, 139.80000, 5);
  location.lng = xlng;

  return location;
}

const makeFullOffer = () => {
  const offers = [];

  for (let i = 0; i <= 10; i++) {
    const offer = {};
    offer.author = makeAuthor();
    offer.offer = makeOffer();
    offer.location = makeLocation();

    offers[i] = offer;
  }

  return offers;
};

makeFullOffer();
