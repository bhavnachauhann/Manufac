export interface DataRow {
  city: string;
  fuel: string;
  year: number;
  month: string;
  price: number;
}

export function getUniqueOptions(data: DataRow[]) {
  return {
    cities: Array.from(new Set(data.map(d => d.city))),
    fuels: Array.from(new Set(data.map(d => d.fuel))),
    years: Array.from(new Set(data.map(d => d.year.toString())))
  };
}

export function getMonthlyData(data: DataRow[], city: string, fuel: string, year: string) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const filtered = data.filter(
    d => d.city === city && d.fuel === fuel && d.year.toString() === year
  );

  const prices = months.map(month => {
    const match = filtered.find(d => d.month === month);
    return match ? match.price : 0;
  });

  return { months, prices };
}
