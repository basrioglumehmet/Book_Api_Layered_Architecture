export function truncateText(text: string, start: number, end: number) {
  return text.slice(start, end).concat("...");
}
