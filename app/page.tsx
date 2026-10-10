import { LandingNavbar } from "@/components/Landing/LandingNavbar"
import { Hero } from "@/components/Landing/Hero"
import { MarketCategories } from "@/components/Landing/MarketCategories"
import { CampusProtocol } from "@/components/Landing/CampusProtocol"
import { MarketplaceSnippet } from "@/components/Landing/MarketplaceSnippet"
import { CTA } from "@/components/Landing/CTA"
import { LandingFooter } from "@/components/Landing/Footer"

export default function LandingPage() {
	return (
		<>
			<main>
				<LandingNavbar />
				<Hero />
				<MarketCategories />
				<CampusProtocol />
				<MarketplaceSnippet />
				<CTA />
			</main>
			<LandingFooter />
		</>
	)
}

