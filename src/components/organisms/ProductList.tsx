import { type ProductItem } from "@/types/ProductItem";
import { ProductListItem } from "@/components/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductItem[] }) => {
	return (
		<ul className="flex flex-wrap justify-around" data-testid="products-list">
			{products.map((product) => (
				<li key={product.id}>
					<ProductListItem product={product}></ProductListItem>
				</li>
			))}
		</ul>
	);
};
