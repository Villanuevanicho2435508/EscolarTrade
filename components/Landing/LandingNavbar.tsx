import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap } from "lucide-react";

const LandingLinks = [
	{
		name: "Categories",
		link: "/categories"
	},
	{
		name: "How It Works",
		link: "tutorial",
	},
	{
		name: "Trust & Safety",
		link: "tos",
	},
	{
		name: "About",
		link: "/about"
	}
]

export function LandingNavbar(){
	return(
		<nav
		className='
		bg-background
		fixed top-0 z-999
		w-full
		py-2 px-8 h-14 flex items-center justify-between
		border
		'
		>
			<Link 
			className='flex gap-2 p-0 leading-4 h-full'
			href="/">
				<GraduationCap size={32} className='h-full aspect-square'/>
				<span>
					<p className='font-semibold text-sm'>
						EscolarTrade
					</p>
					<p className='text-xs text-muted-foreground'>
						CEU Malolos Campus	
					</p>
				</span>
			</Link>

			<div className="links gap-4 flex text-sm text-muted-foreground">
				{
					LandingLinks.map((item, index) => {
						return(
							<Link key={index} href={item.link}>
								{item.name}	
							</Link>
						);
					})
				}
			</div>

			<div className="auth flex gap-2">
				<Button variant="outline">Log In</Button>
				<Button>Sign Up</Button>
			</div>
		</nav>
	);
}
