const element = document.querySelector('.ad-form');
const elementMapFilters = document.querySelector('.map__filters');
const elementMap = document.querySelector('.map__canvas');

const makeFormToggle = function() {
  element.classList.add('.ad-form--disabled');
  elementMapFilters.setAttribute('disabled', 'disabled');

  element = element('disabled');
}

const makeFormDisabled = () => {

  if (elementMapFilters.setAttribute('disabled', 'disabled')) {
    elementMap.style.backround = 'gray';
    elementMapFilters.removeAttribute('disabled', 'disabled');
  }

  if (element.classList.contains('.ad-form--disabled')) {
    element.classList.remove('.ad-form--disabled');
  }
};

export {makeFormDisabled, makeFormToggle};
