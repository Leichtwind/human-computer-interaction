'use strict';

class Timer {

}

document.onkeydown = ({ code }) => {
  switch (code) {
    case 'Space':
      onSpaceDown();
      break;

    case 'F6':
      onF6Down();
      break;
  }
};

document.onkeyup = ({ code }) => {
  switch (code) {
    case 'Space':
      onSpaceUp();
      break;
  }
};

function onSpaceDown() {
  const time = Math.floor(Math.random() * 1000);

  setTimeoutPromise(time).then(() => {
    document
      .getElementById('myCircle')
      .style.visibility = 'visible';
  });
}

function onSpaceUp() {

}

function onF6Down() {

}

/**
 * @param {Number} time
 * @return {Promise}
 */
function setTimeoutPromise(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
