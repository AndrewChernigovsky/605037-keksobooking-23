import { formAdSwitch, onRoomChange, housePrice} from './form.js';
import { makeCard } from './generation.js';

const MIN_PRICE = 1000;

const xIconMainSizeMarker = 52;
const yIconMainSizeMarker = 52;
const xIconMainAnchorMarker = 52;
const yIconMainAnchorMarker = 52;

const iconMainSizeMarker = {
  iconSize: [xIconMainSizeMarker, yIconMainSizeMarker],
  iconAnchor: [xIconMainAnchorMarker, yIconMainAnchorMarker],
};

const xIconPinSizeMarker = 40;
const yIconPinSizeMarker = 40;
const xIconPinAnchorMarker = 20;
const yIconPinAnchorMarker = 40;

const iconPinSizeMarker = {
  iconSize: [xIconPinSizeMarker, yIconPinSizeMarker],
  iconAnchor: [xIconPinAnchorMarker, yIconPinAnchorMarker],
};

const addressField = document.querySelector('#address');
const defaultCoord = {
  lat: 35.6895,
  lng: 139.692,
};

const mapCanvas = L.map('map-canvas')
  .on('load', () => {
    formAdSwitch(false);
    housePrice.placeholder = MIN_PRICE ;
    housePrice.min = MIN_PRICE;

    addressField.value = `${defaultCoord.lat.toFixed(5)} , ${defaultCoord.lng.toFixed(5)}`;
    addressField.readOnly = true;

    onRoomChange();
  })
  .setView({
    lat: defaultCoord.lat,
    lng: defaultCoord.lng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(mapCanvas);

const iconMain = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: iconMainSizeMarker.iconSize,
  iconAnchor: iconMainSizeMarker.iconAnchor,
});

const marker = L.marker(
  {
    lat: defaultCoord.lat, lng: defaultCoord.lng,
  },
  {
    icon: iconMain,
    draggable: true,
  },
);

const createMainMarker = () => {

  marker
    .addTo(mapCanvas);

  marker.on('moveend', (evt) => {
    const addressLatLng = evt.target.getLatLng();
    addressField.value = `${addressLatLng.lat.toFixed(5)} , ${addressLatLng.lng.toFixed(5)}`;
  });
};

createMainMarker(defaultCoord);

let pin =  L.layerGroup().addTo(mapCanvas);

const createPins = (point) => {  
  // if (point.length > 10) {
  //   point.length = 10;
  // }
  console.log(point);
  point.forEach(({ location, offer, author }) => {
    const iconPin = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: iconPinSizeMarker.iconSize,
      iconAnchor: iconPinSizeMarker.iconAnchor,
    });

    const marker = L.marker({
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: iconPin,
    },
    );

    marker
      .addTo(pin)
      .bindPopup(
        makeCard({ location, offer, author }),
        {
          keepInView: true,
        },
      );
  });
};

export {createPins, marker, defaultCoord, mapCanvas, pin};