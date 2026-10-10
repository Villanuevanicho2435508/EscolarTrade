import { LandingNavbar } from "@/components/Landing/LandingNavbar"
import { Hero } from "@/components/Landing/Hero"
import { MarketCategories } from "@/components/Landing/MarketCategories"
import { CampusProtocol } from "@/components/Landing/CampusProtocol"
import { MarketplaceSnippet } from "@/components/Landing/MarketplaceSnippet"

export default function Page() {
	return (
		<main>
			<LandingNavbar />
			<Hero />
			<MarketCategories />
			<CampusProtocol />
			<MarketplaceSnippet />
		</main>
	)
}

