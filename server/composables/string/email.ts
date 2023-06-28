/**
 * Converts an email address to a prefix string.
 * @param {string} email - The email address to be converted
 * @returns {string} The converted prefix string
 */
export function convertEmailToPrefix(email: string): string {
  const regex = /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)$/;
  const match = email.match(regex);
  if (match) {
    const prefix = match[1];
    const domain = match[2];

    const normalizedPrefix = prefix.replace(/[^a-zA-Z0-9_]/g, "_");

    return `${normalizedPrefix}_${domain.split(".").slice(0, -1).join("_")}`;
  }

  return "";
}
