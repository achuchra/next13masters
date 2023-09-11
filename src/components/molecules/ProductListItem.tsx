import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";
import { ProductListItemImage } from "@/components/atoms/ProductListItemImage";
import { type ProductItem } from "@/types/ProductItem";

export const ProductListItem = ({ product }: { product: ProductItem }) => {
	return (
		<div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
			<ProductListItemImage src={product.image.src} alt={product.image.alt}></ProductListItemImage>
			<ProductListItemDescription {...product}></ProductListItemDescription>
		</div>
	);
};
