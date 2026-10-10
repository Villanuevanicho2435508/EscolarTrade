import { LandingNavbar } from "@/components/Landing/LandingNavbar"
import { Hero } from "@/components/Landing/Hero"
import { MarketCategories } from "@/components/Landing/MarketCategories"
import { CampusProtocol } from "@/components/Landing/CampusProtocol"
import { MarketplaceSnippet } from "@/components/Landing/MarketplaceSnippet"
import { CTA } from "@/components/Landing/CTA"

export default function Page() {
	return (
		<main>
			<LandingNavbar />
			<Hero />
			<MarketCategories />
			<CampusProtocol />
			<MarketplaceSnippet />
			<CTA />
		</main>
	)
}

