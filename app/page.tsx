import { LandingNavbar } from "@/components/Landing/LandingNavbar"
import { Hero } from "@/components/Landing/Hero"
import { MarketCategories } from "@/components/Landing/MarketCategories"

export default function Page() {
	return (
		<main>
			<LandingNavbar />
			<Hero />
			<MarketCategories />
		</main>
	)
}

