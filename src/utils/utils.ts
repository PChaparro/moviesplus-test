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

export function roundDecimal(value: number, decimals: number): number {
  return Number(value.toFixed(decimals));
}
