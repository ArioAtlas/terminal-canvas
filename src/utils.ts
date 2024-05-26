import sharp from 'sharp';

export async function imageToBitmapArray(
  imagePath: string,
  width: number = 10,
  height: number = 10
): Promise<string[][]> {
  const bitmapArray: string[][] = [];

  // Load and resize the image
  const resizedImage = await sharp(imagePath)
    .resize(width, height)
    .ensureAlpha() // Ensure the image has an alpha channel
    .raw()
    .toBuffer();

  // Extract pixel data
  for (let y = 0; y < height; y++) {
    const row: string[] = [];
    for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * 4; // Each pixel has 4 values: R, G, B, A
      const r = resizedImage[offset];
      const g = resizedImage[offset + 1];
      const b = resizedImage[offset + 2];
      // Convert RGB to hex
      const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
      row.push(hexColor);
    }
    bitmapArray.push(row);
  }

  return bitmapArray;
}
