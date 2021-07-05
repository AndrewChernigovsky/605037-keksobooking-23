const nextButton = document.querySelector('#next');

const mapCanvas = L.map('map-canvas')
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

const points = [
  {
    title: 'カラハーイ hotel',
    lat: 35.735118,
    lng: 139.774821,
  },
  {
    title: 'Asian Kitchen',
    lat: 35.676194,
    lng: 139.650311,
  },
];

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

const markerGroup = L.layerGroup().addTo(mapCanvas);

const createMarker = (point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );
};

points.slice(0, points.length / 2).forEach((point) => {
  createMarker(point);
});


nextButton.addEventListener('click', () => {
  markerGroup.clearLayers();

  points.slice(points.length / 2).forEach((point) => {
    createMarker(point);
  });
  nextButton.remove();
});
