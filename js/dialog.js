"use strict";
(function () {
  let openButtonSetup = document.querySelector('.setup-open');
  let closeButtonSetup = window.setup.setupDialog.querySelector('.setup-close');
  let nameInput = document.querySelector('.setup-user-name');

  let onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSetup();
    }
  };

  let openSetup = function () {
    window.setup.setupDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  let closeSetup = function () {
    window.setup.setupDialog.classList.add('hidden');

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

  const dialogHandle = document.querySelector(`.upload`);
  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.setupDialog.style.top = (window.setup.setupDialog.offsetTop - shift.y) + `px`;
      window.setup.setupDialog.style.left = (window.setup.setupDialog.offsetLeft - shift.x) + `px`;
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
