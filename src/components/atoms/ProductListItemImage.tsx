import Image from "next/image";

export const ProductListItemImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="h-48 w-48 flex-shrink-0 overflow-hidden ">
			<Image
				src={src}
				alt={alt}
				className="transition-transform ease-out hover:scale-105"
				width={192}
				height={192}
			></Image>
		</div>
	);
};
