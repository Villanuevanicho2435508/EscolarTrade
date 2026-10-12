interface Props{
	params: Promise<{ slug: string }>
}

export default async function ListingDetailsPage({ params } : Props){
	const { slug } = await params;

	return(
		<main>

		</main>
	);
}
