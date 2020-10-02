'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const COUNT_OF_WIZARD = 4;

let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

let similarListElement = userDialog.querySelector('.setup-similar-list');
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
userDialog.querySelector('.setup-similar').classList.remove('hidden');
