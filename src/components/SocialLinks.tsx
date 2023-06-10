import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/SocialLinks.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function SocialLinks({
	title,
	url,
	image,
}: {
	title: string;
	url: string;
	image: string;
}) {
	return (
		<>
			<Link className={styles.link} rel="noopener noreferrer" target="_blank" href={url}>
				<div className={styles.social_link} style={montserrat.style}>
					<Image
						className={styles.icon}
						alt={title}
						src={image}
						width={300}
						height={300}
					/>
					<h1 className={styles.title}>{title}</h1>
				</div>
			</Link>
		</>
	);
}
