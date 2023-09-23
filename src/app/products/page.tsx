import { type Metadata } from "next";
import { getProductsList } from "@/api/products/products";
import { ProductList } from "@/components/organisms/ProductList";

export const metadata: Metadata = {
	title: "Produkty",
};

export default async function ProductsPage() {
	const products = await getProductsList();
	return (
		<>
			<ProductList products={products}></ProductList>
		</>
	);
}
