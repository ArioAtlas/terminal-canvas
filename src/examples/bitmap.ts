import path from 'path';
import { CanvasApp } from '../canvas-app';
import { hexToAnsi } from '../helpers/color.helper';
import { imageToBitmapArray } from '../utils';

let bitmap: string[][] = [];
const resolution = [12, 10];
imageToBitmapArray(path.resolve(__dirname, '../../assets/sweden.png'), ...resolution).then((bitmapArray) => {
  bitmap = bitmapArray;
});

class BitmapExample extends CanvasApp {
  setup(): void {
    // No initial setup needed for this example
  }

  draw(): void {
    for (const [y, row] of bitmap.entries()) {
      for (const [x, color] of row.entries()) {
        this.canvas.setPixel(x, y, hexToAnsi(color));
      }
    }
  }
}

// Create and start the example app
const app = new BitmapExample(300, 160, 3, 1);
app.start();

// Stop the example after 10 seconds
setTimeout(() => {
  app.stop();
  console.log('Animation finished');
}, 10000);
