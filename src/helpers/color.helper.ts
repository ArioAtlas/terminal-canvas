// Helper method to convert RGB to ANSI escape code
export function rgbToAnsi(r: number, g: number, b: number, width: number = 3): string {
  return `\x1B[48;2;${r};${g};${b}m${' '.repeat(width)}\x1B[0m`;
}

export function hexToAnsi(hex: string, width: number = 3): string {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }
  if (hex.length !== 6) {
    throw new Error('Invalid hex color format. Expected format: #RRGGBB');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `\x1B[48;2;${r};${g};${b}m${' '.repeat(width)}\x1B[0m`;
}
