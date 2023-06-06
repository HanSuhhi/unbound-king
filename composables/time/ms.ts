/**
 * Converts seconds to milliseconds.
 *
 * @param {number} second The number of seconds.
 * @returns {number} The number of milliseconds.
 */
export function useSecond(second: number): number {
  return second * 1000;
}

/**
 * Converts minutes to milliseconds.
 *
 * @param {number} minute The number of minutes.
 * @returns {number} The number of milliseconds.
 */
export function useMinute(minute: number): number {
  return minute * useSecond(60);
}
