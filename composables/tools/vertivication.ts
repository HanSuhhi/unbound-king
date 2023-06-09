/**
 * Checks if a given string is a valid email address.
 *
 * @param {string} email The email address to check
 * @returns {boolean} True if the email is valid, false otherwise
 */
export function verifyEmail(email: string): boolean {
  const re = /^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-z]{2,6}$/;

  return re.test(email);
}
