import { isBefore, isAfter, addDays } from 'date-fns';

export default function productStatus(product) {
  const twoWeeks = addDays(new Date(), 14);
  const fiveDays = addDays(new Date(), 5);

  if (isAfter(new Date(product.expiring_date), twoWeeks)) {
    return {
      id: 1,
      name: 'EXCELENTE',
    };
  }

  if (
    isAfter(new Date(product.expiring_date), new Date()) &&
    isBefore(new Date(product.expiring_date), fiveDays)
  ) {
    return {
      id: 3,
      name: 'QUASE VENCENDO',
    };
  }

  if (
    isAfter(new Date(product.expiring_date), new Date()) &&
    isBefore(new Date(product.expiring_date), twoWeeks)
  ) {
    return {
      id: 2,
      name: 'BOM',
    };
  }

  return {
    id: 4,
    name: 'VENCIDO',
  };
}
