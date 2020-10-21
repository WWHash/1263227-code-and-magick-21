'use strict';
(function () {
  const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  const FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  const COUNT_OF_WIZARD = 4;

  let setupDialog = document.querySelector('.setup');
  let setupWizard = document.querySelector('.setup-wizard');
  let wizardCoat = setupWizard.querySelector('.wizard-coat');
  let wizardEyes = setupWizard.querySelector('.wizard-eyes');
  let wizardFireball = setupDialog.querySelector('.setup-fireball-wrap');
  let coatInput = setupDialog.querySelector('[name = coat-color]');
  let eyesInput = setupDialog.querySelector('[name = eyes-color]');
  let fireballInput = setupDialog.querySelector(('[name = fireball-color]'));

  let similarListElement = setupDialog.querySelector('.setup-similar-list');
  let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  let createRandomWizardCollection = function (count) {
    const wizards = [];
    for (let i = 0; i < count; i++) {
      wizards.push({
        name: window.util.getRandomElement(WIZARD_NAMES),
        surname: window.util.getRandomElement(WIZARD_SURNAMES),
        coatColor: window.util.getRandomElement(COAT_COLORS),
        eyesColor: window.util.getRandomElement(EYES_COLORS),
      });
    }
    return wizards;
  };

  let renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = `${wizard.name}`;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  let drawWizard = function (collection) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < collection.length; i++) {
      fragment.appendChild(renderWizard(collection[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < COUNT_OF_WIZARD; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setupDialog.querySelector('.setup-similar').classList.remove('hidden');
  }, function() {});

  wizardCoat.addEventListener('click', function () {
    let color = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = color;
    coatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    let color = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = color;
    eyesInput.value = color;
  });

  wizardFireball.addEventListener('click', function () {
    let color = window.util.getRandomElement(FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = color;
    fireballInput.value = color;
  });

  window.setup = {
    setupDialog
  };
})();
