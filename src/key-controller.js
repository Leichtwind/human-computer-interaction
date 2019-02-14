'use strict';

import Timer from './timer';
import Util from './util';

export default class {
  /**
   *
   */
  constructor() {
    this._latentTimer = new Timer();
    this._motorTimer = new Timer();

    this._timeout = null;

    this._myCircle = document.getElementById('myCircle');
    this._latentField = document.getElementById('latentTime');
    this._motorField = document.getElementById('motorTime');
  }

  /**
   *
   */
  onSpaceDown() {
    if (this._timeout) {
      return;
    }

    const time = Util.randomInt(2000, 3000);

    this._myCircle.style.visibility = 'hidden';
    this._latentField.innerText = 0;
    this._motorField.innerText = 0;

    this._timeout = setTimeout(() => {
      this._myCircle.style.visibility = 'visible';

      this._latentTimer.start(time => {
        this._latentField.innerText = time.toString();
      });
    }, time);
  }

  /**
   *
   */
  onSpaceUp() {
    clearTimeout(this._timeout);
    this._timeout = null;

    if (this._latentTimer.isActive) {
      this._latentTimer.stop();

      this._motorTimer.start(time => {
        this._motorField.innerText = time.toString();
      });
    }
  }

  /**
   *
   */
  onSixDown() {
    this._motorTimer.stop();
  }
}
