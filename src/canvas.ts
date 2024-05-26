export class Canvas {
  private _width: number;
  private _height: number;
  private buffer: string[][];

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this.buffer = Array.from({ length: height }, () => Array(width).fill(' '));
  }

  setPixel(x: number, y: number, char: string): void {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.buffer[y][x] = char;
    }
  }

  clear(): void {
    this.buffer = Array.from({ length: this.height }, () => Array(this.width).fill(' '));
  }

  render(): void {
    console.clear();
    for (const [y, row] of this.buffer.entries()) {
      for (const [x, value] of row.entries()) {
        process.stdout.cursorTo(x, y);
        process.stdout.write(value);
      }
    }
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }
}
