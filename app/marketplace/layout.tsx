import { MarketplaceHeader } from "@/components/Marketplace/MarketPlaceHeader"
import { Footer } from "@/components/Landing/Footer"
import { FooterLinkType } from "@/components/Landing/Footer"

const FOOTER_LINKS: FooterLinkType[] = [
  {
    title: "Student Commerce",
    links: [
      { label: "Marketplace Directory", href: "/marketplace" },
      { label: "Active Listings", href: "#" },
      { label: "My Purchases", href: "#" },
      { label: "Campus Drop-off Points", href: "#" },
    ],
  },
  {
    title: "Safety & Verification",
    links: [
      { label: "Safe Meetup Locations", href: "#" },
      { label: "Report Inappropriate Item", href: "#" },
      { label: "Honest Listing Policy", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help & FAQs", href: "#" },
      { label: "Moderation Team", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
		<>
			<MarketplaceHeader
				user={{
					initials: "BR",
					name: "Bea R.",
					subtitle: "BS Nursing 3rd Yr",
				}}
			/>
			{children}
			<Footer links={FOOTER_LINKS}/>
		</>
	)
}

