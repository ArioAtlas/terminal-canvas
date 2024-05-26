import { Canvas } from './canvas';

export abstract class CanvasApp {
  protected canvas: Canvas;
  private frameRate: number;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(width: number, height: number, frameRate: number = 30) {
    this.canvas = new Canvas(width, height);
    this.frameRate = frameRate;
  }

  // Method to be implemented by the extending class
  abstract setup(): void;
  abstract draw(): void;

  // Start the animation loop
  start(): void {
    this.hideCursor();
    this.setup();
    this.intervalId = setInterval(() => {
      this.canvas.clear();
      this.clearTerminal();
      this.draw();
      this.canvas.render();
    }, 1000 / this.frameRate);
  }

  // Stop the animation loop
  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.showCursor();
  }

  // Hide the cursor
  private hideCursor(): void {
    process.stdout.write('\x1B[?25l');
  }

  // Show the cursor
  private showCursor(): void {
    process.stdout.write('\x1B[?25h');
  }

  // Clear the terminal
  private clearTerminal(): void {
    process.stdout.cursorTo(0, 0);
    process.stdout.clearScreenDown();
  }
}
