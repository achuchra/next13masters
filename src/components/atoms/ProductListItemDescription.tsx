import { type ProductItem } from "@/types/ProductItem";
import { numberToMoney } from "@/utils/calculations/money-convert";

export const ProductListItemDescription = ({ title, description, price }: ProductItem) => {
	return (
		<div>
			<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</h3>
			<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
			<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{numberToMoney(price)}</p>
		</div>
	);
};
