const formDataFilter = document.querySelector('.ad-form');
const formFieldsetHeader = document.querySelector('.ad-form-header');
const formFieldset = document.querySelectorAll('.ad-form__element');
const formMap = document.querySelector('.map__filters');
const formMapOption = document.querySelectorAll('.map__filter');

const formSwitch = (toggle) => {
  const classFormDis = formDataFilter.classList.contains('ad-form--disabled');
  const classFormMapDis = formDataFilter.classList.contains('map__filters--disabled');

  for (let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = toggle;
  }

  for (let i = 0; i < formMapOption.length; i++) {
    formMapOption[i].disabled = toggle;
  }

  if (toggle === true) {
    formDataFilter.classList.add('ad-form--disabled');
    formMap.classList.add('map__filters--disabled');
    formFieldsetHeader.disabled = true;
  } else {
    formDataFilter.classList.remove('ad-form--disabled');
    formMap.classList.remove('map__filters--disabled');
    formFieldsetHeader.disabled = false;
  }
};



export { formSwitch };
