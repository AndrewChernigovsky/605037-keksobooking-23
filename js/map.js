import { formSwitch } from './form.js';
import { offers } from './data.js';
import { makeCard } from './generation.js';

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
  lat: 35.735118,
  lng: 139.774821,
};

const mapCanvas = L.map('map-canvas')
  .on('load', () => {
    formSwitch(false);
    addressField.value = `${defaultCoord.lat.toFixed(5)} , ${defaultCoord.lng.toFixed(5)}`;
    addressField.readOnly = true;
  })
  .setView({
    lat: defaultCoord.lat,
    lng: defaultCoord.lng,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(mapCanvas);

const createMainMarker = () => {
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

  marker
    .addTo(mapCanvas);

  marker.on('moveend', (evt) => {
    const addressLatLng = evt.target.getLatLng();
    addressField.value = `${addressLatLng.lat.toFixed(5)} , ${addressLatLng.lng.toFixed(5)}`;
  });


};
createMainMarker(defaultCoord);

const pin = L.layerGroup().addTo(mapCanvas);

const createPins = (point) => {
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

createPins(offers);
