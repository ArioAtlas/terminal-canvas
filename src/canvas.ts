export class Canvas {
  private width: number;
  private height: number;
  private buffer: string[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
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
    for (const row of this.buffer) {
      console.log(row.join(''));
    }
  }
}
