import Link from "next/link";

// TODO: actual links
const FOOTER_LINKS = [
	{
		title: "Categories",
		links: [
			{ label: "Textbooks & Reviewers", href: "/browse/textbooks" },
			{ label: "Supplies & Stationery", href: "/browse/nursing-medical" },
			{ label: "Scientific Calculators & Tech", href: "/browse/calculators" },
			{ label: "Gadgets & Tech", href: "/browse/dentistry" },
			{ label: "Uniforms", href: "/browse/uniforms" },
			{ label: "Project Materials", href: "/browse/materials" },
			{ label: "Foods", href: "/browse/foods" },
		],
	},
	{
		title: "Campus Trust",
		links: [
			{ label: "CEU Email Verification", href: "/trust/verification" },
			{ label: "Designated Meetup Zones", href: "/trust/meetup-zones" },
			{ label: "Honest Listing Policty", href: "/trust/honor-code" },
		],
	},
	{
		title: "Institutional",
		links: [
			{ label: "About EscolarTrade", href: "/about" },
			{ label: "Privacy Policy", href: "/privacy" },
			{ label: "Terms of Service", href: "/terms" },
		],
	},
];

export function LandingFooter() {
	return (
		<footer className="w-full bg-muted px-8 pt-8 pb-4">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					<div className="col-span-2 md:col-span-1">
						<p className="text-base font-semibold">EscolarTrade</p>
						<p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
							The hyper-local peer commerce marketplace engineered exclusively
							for the Centro Escolar University Malolos campus community.
						</p>
					</div>

					{FOOTER_LINKS.map((group) => {
						const headingId = `footer-${group.title
							.toLowerCase()
							.replace(/\s+/g, "-")}`;

						return (
							<nav key={group.title} aria-labelledby={headingId}>
								<h2
									id={headingId}
									className="text-sm font-semibold uppercase tracking-wide"
								>
									{group.title}
								</h2>
								<ul className="mt-3">
									{group.links.map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						);
					})}
				</div>

				<div className="mt-10 flex flex-col gap-2 border-t pt-4 text-xs md:flex-row md:items-center md:justify-between">
					<p className="font-medium">
						Exclusive to verified CEU Malolos students, faculty, and staff.
						Simulated payment &amp; campus pickup only.
					</p>
					<small className="text-muted-foreground">
						&copy; {new Date().getFullYear()} EscolarTrade &bull; Bisabytes.
						All rights reserved.
					</small>
				</div>
			</div>
		</footer>
	);
}
