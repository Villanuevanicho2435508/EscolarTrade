import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";

type BreadcrumbItemType = {
	label: string;
	link: string;
};
interface BreadcrumbsProps {
	breadcrumbs: {
		links: BreadcrumbItemType[];
		page: string
	}
}

export function Breadcrumbs({ breadcrumbs } : BreadcrumbsProps){
	return(
		<Breadcrumb>
			<BreadcrumbList>
				{
					breadcrumbs.links.map((item, index) => {
						return(
							<React.Fragment key={index}>
								<BreadcrumbItem>
									<BreadcrumbLink render={<a href={item.link} />}>
										{item.label}
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
							</React.Fragment>
						);
					})
				}
				<BreadcrumbItem>
					<BreadcrumbPage>{breadcrumbs.page}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
