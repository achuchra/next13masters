import products from "./static-products.json";
import { ProductList } from "@/components/organisms/ProductList";

export default async function ProductsPage() {
	return <ProductList products={products}></ProductList>;
}
