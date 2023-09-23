import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products/products";
import { ProductListItem } from "@/components/molecules/ProductListItem";
import { SuggestedProductList } from "@/components/organisms/SuggestedProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product.title,
		description: product.description,
		openGraph: {
			title: product.title,
			description: product.description,
			images: [product.image],
		},
	};
};

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: Record<string, string | string[]>;
}) {
	const productId = params.productId;
	console.log("started asking for a product at", new Date().toJSON());
	const product = await getProductById(productId);
	console.log("received a product at", new Date().toJSON());
	return (
		<>
			<h1 className="prose prose-xl">{product.title}</h1>
			<ProductListItem product={product}></ProductListItem>
			<aside className="py-6">
				<Suspense
					fallback={
						<h4 className="mb-4 text-center text-lg">
							Loading suggested products...
						</h4>
					}
				>
					<h4 className="mb-4 text-center text-lg">Suggested products</h4>
					<SuggestedProductList></SuggestedProductList>
				</Suspense>
			</aside>
		</>
	);
}
