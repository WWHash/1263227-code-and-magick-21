'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const COUNT_OF_WIZARD = 4;

let setup = document.querySelector('.setup');
let openButtonSetup = document.querySelector('.setup-open');
let closeButtonSetup = setup.querySelector('.setup-close');
let nameInput = document.querySelector('.setup-user-name');
let setupWizard = document.querySelector('.setup-wizard');
let wizardCoat = setupWizard.querySelector('.wizard-coat');
let wizardEyes = setupWizard.querySelector('.wizard-eyes');
let wizardFireball = setup.querySelector('.setup-fireball-wrap');
let coatInput = setup.querySelector('[name = coat-color]');
let eyesInput = setup.querySelector('[name = eyes-color]');
let fireballInput = setup.querySelector(('[name = fireball-color]'));

let similarListElement = setup.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let getRandomElement = function (arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

let createRandomWizardCollection = function (count) {
  const wizards = [];
  for (let i = 0; i < count; i++) {
    wizards.push({
      name: getRandomElement(WIZARD_NAMES),
      surname: getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS),
    });
  }
  return wizards;
};

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = `${wizard.name} ${wizard.surname}`;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

let drawWizard = function (collection) {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < collection.length; i++) {
    fragment.appendChild(renderWizard(collection[i]));
  }
  similarListElement.appendChild(fragment);
};

let wizards = createRandomWizardCollection(COUNT_OF_WIZARD);
drawWizard(wizards);
setup.querySelector('.setup-similar').classList.remove('hidden');

let onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSetup();
  }
};

let openSetup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

let closeSetup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

openButtonSetup.addEventListener('click', openSetup);

openButtonSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openSetup();
  }
});

closeButtonSetup.addEventListener('click', closeSetup);

closeButtonSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeSetup();
  }
});

nameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

wizardCoat.addEventListener('click', function () {
  let color = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = color;
  coatInput.value = color;
});

wizardEyes.addEventListener('click', function () {
  let color = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = color;
  eyesInput.value = color;
});

wizardFireball.addEventListener('click', function () {
  let color = getRandomElement(FIREBALL_COLORS);
  wizardFireball.style.backgroundColor = color;
  fireballInput.value = color;
});
