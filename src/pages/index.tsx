import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SocialLinks from "@/components/SocialLinks";
import photo from "/public/onur_ravli.jpg";
import Image from "next/image";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const links = [
	{
		title: "Github",
		url: "https://github.com/onurravli",
		image: "/github.png",
	},
	{
		title: "LinkedIn",
		url: "https://linkedin.com/in/onurravli",
		image: "/linkedin.png",
	},
	{
		title: "Twitter",
		url: "https://twitter.com/onurravli",
		image: "/twitter.png",
	},
	{
		title: "Instagram",
		url: "https://instagram.com/onurravli",
		image: "/instagram.png",
	},
	{
		title: "E-Mail",
		url: "mailto:onur@ravli.co",
		image: "/mail.png",
	},
	{
		title: "CV",
		url: "#",
		image: "/cv.png",
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Onur Ravli</title>
				<meta name="description" content="Onur Ravli Personal Web Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/onur_ravli.jpg" />
			</Head>
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.photo}>
						<Image src={photo} alt="Onur Ravli" width={500} height={500} />
					</div>
					<div className={styles.name}>
						<p style={montserrat.style}>
							Onur <b>Ravli</b>
						</p>
					</div>
					<div className={styles.description}>
						<p style={montserrat.style}>
							Software Developer, Intern at Jotform, Project Scholarship Holder at
							TUBITAK
						</p>
					</div>
					<div className={styles.social_links}>
						{links.map((link) => (
							<SocialLinks
								key={link.title}
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
