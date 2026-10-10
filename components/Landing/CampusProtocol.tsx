import { 
	Camera,
	MessageSquareText,
	BadgeCheck,
} from "lucide-react";
import {
 Card,
 CardContent
} from "@/components/ui/card"
import { Separator } from "../ui/separator";

const STEPS = [
	{
		name: "List in Minutes",
		description: "Snap photos of your used textbooks, scrub suits, or scientific calculators. Set your price in ₱ and select designated campus meetup zones.",
		icon: Camera,
		label: "Takes under 90 seconds"
	},
	{
		name: "Chat & Agree",
		description: "Connect directly with fellow verified Escolarians through in-app campus messaging. Coordinate schedule gaps between your lectures.",
		icon: MessageSquareText,
		label: "CEU student verified"
	},
	{
		name: "Pick up on Campus",
		description: "Meet at protected student hubs like the Centennial Hall, University Library ground floor, or Main Canteen to inspect and collect.",
		icon: BadgeCheck,
		label: "Inspect before buying"
	}
]

export function CampusProtocol(){
	return(
		<section id="protocols" className="p-8 w-full flex flex-col bg-muted">
			<p className="text-xs font-semibold uppercase text-muted-foreground">
				campus protocol
			</p>
			<h2 className="font-semibold text-2xl">
				Trading made simple and safe on campus
			</h2>
			<p className='mb-4 text-muted-foreground'>
				Zero shipping costs, zero stranger danger. Peer-to-peer exchanges within CEU Malolos grounds.
			</p>
			<div className="steps flex gap-4">
				{
					STEPS.map((item, index) => {
						const Icon = item.icon;
						return(
							<Card key={item.name}>
								<CardContent>
									<h3 className="text-lg mb-2 font-medium">
										{(index + 1) + ". " + item.name}
									</h3>
									<p className="text-muted-foreground">{item.description}</p>
									<Separator className='my-4' />
									<div className="text-muted-foreground items-center flex gap-2">
										<Icon />
										<p>{item.label}</p>
									</div>
								</CardContent>
							</Card>
						);
					})
				}
			</div>
		</section>
	);
}
