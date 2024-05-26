import { CanvasApp } from '../canvas-app';

class BasicExample extends CanvasApp {
  private x: number = 0;
  private y: number = 5;
  private direction: number = 1;

  setup(): void {
    // Initialize any state here
    this.x = 0;
    this.y = 5;
    this.direction = 1;
  }

  draw(): void {
    // Update state and draw the current frame
    this.canvas.setPixel(this.x, this.y, '💃🏼');

    this.x += this.direction;
    if (this.x >= this.canvas.width || this.x < 0) {
      this.direction *= -1;
    }
  }
}

// Create and start the example app
const app = new BasicExample(80, 60);
app.start();

// Stop the example after 10 seconds
setTimeout(() => {
  app.stop();
  console.log('Animation finished');
}, 30000);
