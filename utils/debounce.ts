/*
   a utility function to apply the debouncing of the seraching where it takes a func returns a generic type of F and delay number 

   and we will set a timer with timeout it Keeps track of the setTimeout ID so we can clear it before restarting.

   and it will return a function where:
   - clearTimeout(timer) – cancels any pending execution of func.
   - setTimeout(...) this schedules func to run after the specified delay.
   - func.apply(this, args) this ensures this context and arguments are preserved 

   
*/

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
