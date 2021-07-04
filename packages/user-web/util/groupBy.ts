export const groupBy = <T extends Record<string, unknown>>(array: T[], getKey: keyof T | ((object: T) => string)) => {
  const accumulator: Record<string, T[]> = {};
  array.forEach((v) => {
    const key = typeof getKey !== "function" ? String(v[getKey]) : getKey(v);
    const objects = accumulator[key] ?? [];
    accumulator[key] = [...objects, v];
  });
  return accumulator;
};
