import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Listing } from "@/types/market.types";
import { ListingCard } from "../Marketplace/ListingCard";

export const LISTINGS: Listing[] = [
	{
		id: "casio-fx-991ex-classwiz",
		title: "Casio fx-991EX ClassWiz",
		category: "Scientific Calculators",
		price: 950,
		condition: "Used - Like New",
		description:
			"With hard cover case and fresh battery. PRC board exam allowed.",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2hfslRY6GK2hmYRAiHeM1lpMhS3dKIm0YIS13xy8J4nFSuocai2TbSAmyqFGRq4tjrdUOoSH04QrS-ZtaKL2CKBcyv-gEwfYZ-UYwEEmJ0ddQ8L89XAa6rID5O9cZ8ixK4HGlcf-Pi-kG9OJXGiwfhxuxL-WgwymvRfrqDzmM4WtznG8jwo7GOKoza5t3XXDrufGJu_a07NILhQ-CnKmcMuigZJ8L9FY32Yl3Gh-VKuf7O4HEMPj-",
		seller: {
			name: "Bea R.",
			program: "BS Nursing",
		},
		location: "Centrodome",
	},
	{
		id: "guyton-hall-physiology-14th",
		title: "Guyton & Hall Physiology 14th Ed",
		category: "Textbooks & Reviewers",
		price: 1400,
		condition: "Used - Good",
		description:
			"Minor neat highlights in Unit 1 and 2. Rest of the pages crisp clean.",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmpkn-xpCd9oU5w2Tlv1fKuuznXcU6-RdpWXQygiTMiq7DKVlg_7nqjrAJKHY1BoI6IAxfzHahWmh84VwMK2nWjq_uBldZQvx_dyMgH0S71XjPxlsj_GG1J-80j7yfnU73X-FZK9X-3dm9dCbsKCaoiIbCzZVtJS8rsIJDpjzd3yNBR47VtqCFop6UHrxAGIyXCrS9IL3iSL9uAab5G946AeIF9bNd2iHNA6nQ_cMEJu8BLWOkionF",
		seller: {
			name: "Marco T.",
			program: "BS MedTech",
		},
		location: "Canteen",
	},
	{
		id: "ceu-duty-scrub-suit-m",
		title: "CEU Duty Scrub Suit - Size M",
		category: "Uniforms",
		price: 650,
		condition: "Brand New",
		description:
			"Never worn. Extra set ordered from the official tailor. Unisex cut.",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBhABIvirspraRTVU7b4RO3NhGmktiAH5AoVoJ65M3KGDw97NKuThuYzlgd7pS7lXc5QG5Zw6wHa7eIwjQyfR73B09yrGVkUXt9DdAMK4OUmE2_V93X0Q5KkCk0aDpz5nns5EmB5d-3EWpBr5aeVxBZ_afdnZQUjJYOy6VczEnRGMK2Fb_dWU7d7mj6D9iwilMWyT1jG6dVGkzpfElFIEX2Nd61JB1dkIkkEV3dQOESyOpvIZ64ZZE",
		seller: {
			name: "Alyssa V.",
			program: "BS Nursing",
		},
		location: "Lobby",
	},
	{
		id: "apple-pencil-2nd-gen-sleeve",
		title: "Apple Pencil (2nd Gen) + Sleeve",
		category: "Supplies & Stationery",
		price: 3800,
		condition: "Used - Excellent",
		description:
			"100% battery health, flawless tip, includes matte silicone grip.",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsH6yAVtlCZRsTg43GOMn9y4JXelohquROv3Qjimx3olb3MHuihUAKFaqyugJc8AR5JPyo_1LnhzIh_4FrUL1cyios8iA177D_9zj0xVfJlzqO6WDXj4SeB8fcuyBHnww-fUBmCxvsLE3zsE40z32lNJAO1o_R2vuax3ttU6BK0boywn0xNYvJKpXYkGuBxoxVYabK1tpMuGPx3QgHmr_0ljEWUPc5KxFIINgf4MyrbVYM72CLabKj",
		seller: {
			name: "Christian P.",
			program: "Accountancy",
		},
		location: "Library",
	},
];

export function MarketplaceSnippet(){
	// TODO: link to marketplace 
	return(
		<section id="market" className="border p-8 w-full flex flex-col">
			<p className="text-xs font-semibold uppercase text-muted-foreground">
				live marketplace	
			</p>
			<div className='mb-4 flex justify-between'>
				<h2 className="font-semibold text-2xl leading-none">
					Freshly Listed by Escolarians
				</h2>
				<Link href="" className='text-sm flex gap-2 items-center start-end'>
					View all listings
					<ArrowRight size={16}/>
				</Link>
			</div>
			<div className="listings gap-4 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				{
					LISTINGS.map((item) => {
						return(
							<ListingCard listing={item} key={item.id} />
						);
					})
				}
			</div>
		</section>
	);
}
