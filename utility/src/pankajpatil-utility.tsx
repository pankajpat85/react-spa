// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

export const utilityMethod = (application) => {
  return `This is called from ${application} and return from utility`;
};
