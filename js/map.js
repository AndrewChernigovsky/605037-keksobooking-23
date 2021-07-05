import { formSwitch } from './form.js';
import { offers } from './data.js';
import { makeCard } from './generation.js';

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
    lat: 35.735118,
    lng: 139.774821,
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
    iconSize: [52, 52],
    iconAnchor: [26, 52],
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
      iconSize: [40, 40],
      iconAnchor: [20, 40],
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
