"use client"

import Link from "next/link"
import { MapPin, Heart } from "lucide-react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Listing } from "@/types/market.types"
import slugify from "slugify";

export function ListingCard({ listing } : { listing: Listing }){
	// TODO: link to listing page
	// TODO: actual slug from the db
	const slug = slugify(listing.title, { lower: true, trim: true }) + "-" + listing.id;
	
	return(
		<Link href={`/marketplace/${slug}`} >
			<Card className="h-full relative w-full pt-0">
				<div className='relative'>
					<Button
						variant="secondary"
						className="absolute top-2 right-2 z-21"
					><Heart /></Button>
					<Badge
						variant="secondary"
						className="absolute bottom-2 left-2 z-21"
					>{listing.condition}</Badge>
					<img
						src={listing.image[0]}
						alt={listing.title}
						className="relative z-20 aspect-video w-full object-cover"
					/>
				</div>
				<CardHeader>
					<div className="flex justify-between">
						<p className="text-xs text-muted-foreground">{listing.category}</p>
						<p className="font-semibold">₱{listing.price}</p>
					</div>
					<CardTitle className="line-clamp-2">{listing.title}</CardTitle>
					<CardDescription className="truncate">
						{listing.description}
					</CardDescription>
				</CardHeader>
				<CardFooter className="flex-1">
					<div className="text-xs flex justify-between w-full gap-2">
						<div className="flex items-center gap-1">
							<p className="text-sm font-medium truncate">{listing.seller.name}</p>
							<p className="text-muted-foreground">
								• {listing.seller.program}
							</p>
						</div>

						<div className="flex items-center min-w-0 flex-1 justify-end text-muted-foreground">
							<MapPin size={16} className="shrink-0" />
							<p className="truncate">
								{listing.location}
							</p>
						</div>
					</div>
				</CardFooter>			
			</Card>
		</Link>
	);
}
