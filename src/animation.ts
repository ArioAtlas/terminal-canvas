import { Canvas } from './canvas';

export class Animation {
  private canvas: Canvas;
  private frames: Array<Array<[number, number, string]>>;
  private frameDuration: number;

  constructor(canvas: Canvas, frames: Array<Array<[number, number, string]>>, frameDuration: number) {
    this.canvas = canvas;
    this.frames = frames;
    this.frameDuration = frameDuration;
  }

  async play(): Promise<void> {
    for (const frame of this.frames) {
      this.canvas.clear();
      for (const [x, y, char] of frame) {
        this.canvas.setPixel(x, y, char);
      }
      this.canvas.render();
      await this.sleep(this.frameDuration);
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
