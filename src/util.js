'use strict';

import colors from './colors';

export default class {
  /**
   * @param {Number} from
   * @param {Number} to
   * @return {Number}
   */
  static randomInt(from = 0, to = 10000) {
    return Math.floor(from + Math.random() * (to - from));
  }

  /**
   * @return {String}
   */
  static getRandomColor() {
    const { length } = colors;

    return colors[this.randomInt(0, length - 1)];
  }
}
