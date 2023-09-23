import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductList = async () => {
	const products = await getProductsList();
	await sleep(5000);
	return <ProductList products={products.slice(-4)}></ProductList>;
};
