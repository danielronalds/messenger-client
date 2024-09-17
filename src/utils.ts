// A quick function that determines if a string is blank or not
export const isBlank = (str?: string) => {
  return !str || /^\s*$/.test(str);
};
