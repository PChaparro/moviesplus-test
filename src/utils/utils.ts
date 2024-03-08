export function getRandomNumber({
  min,
  max,
}: {
  min: number;
  max: number;
}): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getPosterUrlByPath(posterPath: string): string {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
}

export function getBackdropUrlByPath(backdropPath: string): string {
  return `https://image.tmdb.org/t/p/w1280${backdropPath}`;
}

export function roundDecimal(value: number, decimals: number): number {
  return Number(value.toFixed(decimals));
}

export function randomizeArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
