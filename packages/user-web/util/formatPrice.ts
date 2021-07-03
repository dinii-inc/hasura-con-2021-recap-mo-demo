export const formatPrice = (value: number) => new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(value);
