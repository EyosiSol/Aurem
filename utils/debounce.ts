export function debounce<F extends (...args: string[]) => void>(
  func: F,
  delay: number
): F {
  let timer: NodeJS.Timeout;

  return function (this: string, ...args: string[]) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  } as F;
}
