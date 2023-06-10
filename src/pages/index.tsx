import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SocialLinks from "@/components/SocialLinks";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function Home() {
	return (
		<>
			<Head>
				<title>{`${data.name} ${data.surname}`}</title>
				<meta
					name="description"
					content={`${data.name} ${data.surname} Personal Web Page`}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={data.iconUrl} />
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.photo}>
						<Image
							src={data.imageUrl}
							alt={`${data.name} ${data.surname}'s Photo`}
							width={500}
							height={500}
						/>
					</div>
					<div className={styles.name}>
						<p style={montserrat.style}>
							{data.name} <b>{data.surname}</b>
						</p>
					</div>
					<div className={styles.description}>
						<p style={montserrat.style}>{data.desc}</p>
					</div>
					<div className={styles.links}>
						{data.links.map((link) => (
							<SocialLinks
								key={link.id}
								title={link.title}
								url={link.url}
								image={link.image}
							/>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
