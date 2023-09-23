import type { ProductItem } from "@/types/ProductItem";

export const getProductsList = async () => {
	return (await fetch(
		"https://naszsklep-api.vercel.app/api/products?take=20",
	).then((res) => res.json())) as ProductItem[];
};

export const getProductById = async (id: ProductItem["id"]) => {
	return (await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	).then((res) => res.json())) as ProductItem;
};
