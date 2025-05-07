export const formatCurrency = (
  val: number,
  options?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    ...options,
  }).format(val);
};
