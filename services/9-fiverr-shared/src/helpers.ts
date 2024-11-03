/**
 * A helper function to capitalize the first letter of a string
 * @param str 
 * @returns 
 */
export function firstLetterUppercase(str: string): string {
  const valueString = str.toLowerCase();
  return valueString
    .split(' ')
    .map(
        (value: string) =>
        `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
    )
    .join(' ');
}

export function lowerCase(str: string): string {
  return str.toLowerCase();
}

export const toUpperCase = (str: string): string => {
  return str ? str.toUpperCase() : str;
};

/**
 * A helper function to check if a string is an email
 * @param email 
 * @returns 
 */
export function isEmail(email: string): boolean {
  const regexExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  return regexExp.test(email);
}

/**
 * A helper function to check if a string is a data url
 * @param value 
 * @returns 
 */
export function isDataURL(value: string): boolean {
  const dataUrlRegex =
  /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
  return dataUrlRegex.test(value);
}