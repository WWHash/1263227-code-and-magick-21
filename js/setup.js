'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var COUNT_OF_WIZARD = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var createRandomWizardCollection = function (count) {
  for (var i = 0; i <= count; i++) {
    wizards[i] = {
      name: getRandomElement(WIZARD_NAMES),
      surname: getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COAT_COLOR),
      eyesColor: getRandomElement(EYES_COLOR),
    };
  }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname + ' ';
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var getDrawWizard = function (collection) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < collection.length; i++) {
    fragment.appendChild(renderWizard(collection[i]));
  }
  similarListElement.appendChild(fragment);
};

createRandomWizardCollection(COUNT_OF_WIZARD);
getDrawWizard(wizards);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
