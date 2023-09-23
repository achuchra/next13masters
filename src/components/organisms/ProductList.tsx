import Link from "next/link";
import { type ProductItem } from "@/types/ProductItem";
import { ProductListItem } from "@/components/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductItem[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li key={product.id} className="mx-auto w-[100%]">
					<Link href={`/product/${product.id}`}>
						<ProductListItem product={product}></ProductListItem>
					</Link>
				</li>
			))}
		</ul>
	);
};
