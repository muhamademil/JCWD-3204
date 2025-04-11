export function toGMT7(date: Date): Date {
  const offsetMs = 7 * 60 * 60 * 1000; // GMT+7 offset in milliseconds
  return new Date(date.getTime() + offsetMs);
}
