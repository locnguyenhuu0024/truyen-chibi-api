import * as sharp from 'sharp';
import { ImageSize } from './types/chapter';
export async function getImageSize(imagePath: string): Promise<ImageSize> {
  const metadata = await sharp(imagePath).metadata();
  return {
    width: metadata.width,
    height: metadata.height,
  };
}

export async function getImagesSizes(
  imagePaths: string[],
): Promise<ImageSize[]> {
  const sizePromises = imagePaths.map(async (imagePath) => {
    const metadata = await sharp(imagePath).metadata();
    return {
      path: imagePath,
      width: metadata.width,
      height: metadata.height,
    };
  });

  return Promise.all(sizePromises);
}
