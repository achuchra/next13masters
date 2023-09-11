export const numberToMoney = (number: number): string => {
	return Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(number);
};
