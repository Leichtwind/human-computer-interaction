'use strict';

import KeyController from './key-controller';

const keyController = new KeyController();

document.onkeydown = ({ code }) => {
  switch (code) {
    case 'Space':
      keyController.onSpaceDown();
      break;

    case 'Digit6':
      keyController.onSixDown();
      break;
  }
};

document.onkeyup = ({ code }) => {
  switch (code) {
    case 'Space':
      keyController.onSpaceUp();
      break;
  }
};
