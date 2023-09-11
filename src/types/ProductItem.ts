export type ProductItem = {
	id: string;
	title: string;
	description: string;
	price: number;
	image: ImageSource;
};

export type ImageSource = {
	src: string;
	alt: string;
};
