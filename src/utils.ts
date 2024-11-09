/**
 * A quick function that determines if a string is blank or not
 */
export const isBlank = (str?: string) => {
  return !str || /^\s*$/.test(str);
};

/**
 * Trunicates a string to the given length. Defaults to 60 chars max
 */
export const trunicateString = (s: string, length?: number) => {
  const trunicateLength = length || 60;

  if (s.length <= trunicateLength) {
    return s;
  }

  return s.substring(0, trunicateLength) + '...';
}
