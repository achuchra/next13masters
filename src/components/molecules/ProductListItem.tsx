import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";
import { ProductListItemImage } from "@/components/atoms/ProductListItemImage";
import { type ProductItem } from "@/types/ProductItem";

export const ProductListItem = ({ product }: { product: ProductItem }) => {
	return (
		<div className="flex h-[100%] flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-6 shadow-lg">
			<ProductListItemImage
				src={product.image}
				alt={product.title}
			></ProductListItemImage>
			<ProductListItemDescription {...product}></ProductListItemDescription>
		</div>
	);
};
