import { MarketplaceHeader } from "@/components/Marketplace/MarketPlaceHeader"

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
		</>
	)
}

