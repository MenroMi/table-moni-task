export const formatNumber = (
  val: number,
  options?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat('ru-RU', {
    useGrouping: true,
    maximumFractionDigits: 0,
    ...options,
  }).format(val);
};
