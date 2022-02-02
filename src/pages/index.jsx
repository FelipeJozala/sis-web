import Link from "next/link";
import IndexBanner from "../components/IndexBanner/IndexBanner";
import GridSection from "../components/GridSection/GridSection";
import { GridContainer } from "../components/GridSection/style";
import GridBanner from "../components/GridBanner/GridBanner";
let data = require('../../response.json')

export default function Home({ eventsInfo }) {
	
	return (
		<div>
			<section>
				<h2>Imagem do Dia</h2>
				<hr />
				<IndexBanner/>
			</section>
			<section>
				<h2>Eventos</h2>
				<hr />
				<GridContainer>
				{eventsInfo.map(eventInfo => (
					<Link key={eventInfo.id} href={`./events/${eventInfo.id}` } passHref>
						<GridBanner eventInfo={eventInfo}/>
					</Link>
				))}
				</GridContainer>
			</section>
			<section>
				<h2>Estações Espaciais</h2>
				<hr />
			</section>
		</div> 
	)
}


export const getStaticProps = async () => {
		
		const eventsResponse = await fetch('https://ll.thespacedevs.com/2.2.0/event/upcoming/?limit=3')
		const eventsData = await eventsResponse.json();

		// const stationsResponse = await fetch(`https://ll.thespacedevs.com/2.2.0/spacestation/?status=1`);
		// const stationsData = await stationsResponse.json();

		return {
			props: { eventsInfo: eventsData.results },
			revalidate: 5 
		}
		
};
