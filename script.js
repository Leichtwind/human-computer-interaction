'use strict';

class Timer {
  /**
   * @constructor
   */
  constructor() {
    this.timer = null;
  }

  start() {
    if (this.timer) {
      return;
    }

    const textBoard = document.getElementById('textBoard');

    let time = 0;
    textBoard.innerText += time.toString();

    this.timer = setInterval(() => {
      time++;
      textBoard.innerText = time.toString();
    }, 1);
  }

  stop() {
    clearInterval(this.timer);
    // this.timer = null;
  }
}

const timer = new Timer();

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
  const time = randomInt(2000, 3000);

  setTimeoutPromise(time).then(() => {
    document.getElementById('myCircle').style.visibility = 'visible';
    timer.start();
  });
}

function onSpaceUp() {
  timer.stop();
}

function onF6Down() {

}

/**
 * @param {Number} from
 * @param {Number} to
 * @return {number}
 */
function randomInt(from = 0, to = 10000) {
  return Math.floor(from + Math.random() * (to - from));
}

/**
 * @param {Number} time
 * @return {Promise}
 */
function setTimeoutPromise(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
