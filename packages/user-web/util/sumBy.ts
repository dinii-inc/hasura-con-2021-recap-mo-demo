export const sumBy = <T extends Record<string, any>>(array: T[], getValue: keyof T | ((object: T) => number)) =>
  array.reduce((p, c) => {
    const value = typeof getValue === "function" ? getValue(c) : c[getValue];
    return p + value;
  }, 0);
