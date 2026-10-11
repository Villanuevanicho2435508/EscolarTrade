import Link from "next/link";

export type FooterLinkPairType = {
	label: string,
	href: string
};

export type FooterLinkType = {
	title: string,
	links: FooterLinkPairType[]
}

export function LandingFooter({ links } : { links: FooterLinkType[] }) {
	return (
		<footer className="w-full bg-muted px-8 pt-8 pb-4">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
					<div className="col-span-2 lg:col-span-1">
						<p className="text-base font-semibold">EscolarTrade</p>
						<p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
							The hyper-local peer commerce marketplace engineered exclusively
							for the Centro Escolar University Malolos campus community.
						</p>
					</div>

					{links.map((group) => {
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
										<li key={`${link.label}-${link.href}`}>
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

				<div className="mt-10 flex flex-col gap-2 border-t pt-4 text-xs lg:flex-row lg:items-center lg:justify-between">
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
