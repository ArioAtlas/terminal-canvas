import { Canvas } from '../canvas';
import { Animation } from '../animation';

const canvas = new Canvas(20, 10);

const frames: Array<Array<[number, number, string]>> = [
  [
    [0, 5, '*'],
    [1, 5, '*'],
    [2, 5, '*'],
    [3, 5, '*'],
    [4, 5, '*'],
  ],
  [
    [1, 5, '*'],
    [2, 5, '*'],
    [3, 5, '*'],
    [4, 5, '*'],
    [5, 5, '*'],
  ],
  [
    [2, 5, '*'],
    [3, 5, '*'],
    [4, 5, '*'],
    [5, 5, '*'],
    [6, 5, '*'],
  ],
  [
    [3, 5, '*'],
    [4, 5, '*'],
    [5, 5, '*'],
    [6, 5, '*'],
    [7, 5, '*'],
  ],
  [
    [4, 5, '*'],
    [5, 5, '*'],
    [6, 5, '*'],
    [7, 5, '*'],
    [8, 5, '*'],
  ],
];

const animation = new Animation(canvas, frames, 500);

animation.play().then(() => {
  console.log('Animation finished');
});
