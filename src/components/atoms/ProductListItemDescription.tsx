import { type ProductItem } from "@/types/ProductItem";
import { numberToMoney } from "@/utils/calculations/money-convert";

export const ProductListItemDescription = ({ title, price }: ProductItem) => {
	return (
		<div>
			<h3 className="text-lg font-medium">{title}</h3>
			<p className="mt-1 text-sm">{numberToMoney(price)}</p>
		</div>
	);
};
