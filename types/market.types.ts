export type Category = "Textbooks & Reviewers" | "Supplies & Stationery" | "Scientific Calculators" | "Gadgets & Tech" | "Uniforms" | "Project Materials" | "Foods";
export type Condition =
	| "Brand New"
	| "Used - Like New"
	| "Used - Excellent"
	| "Used - Good";
export type Listing = {
	id: string;
	title: string;
	category: Category;
	price: number;
	condition: Condition;
	description: string;
	image: string;
	seller: {
		name: string;
		program: string;
	};
	location: string;
};

