import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Kontaktujte mne!
						</div>

						<div className="subtitle contact-subtitle">
							Jsem moc rád, že máš zájem o zanechání feedbacku, zprávy, bussiness nabídky, či 
							jakéhokoliv jiného kontaktu. Jsem otevřený novým výzvám.
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Odpovídám na všechny zprávy do 24 hodin, přes nějaké ty "horší časy" to může trvat trochu déle. Tak kdyžtak použijte kontaktní formulář
							na stránkách. Na zprávy z formulářů odpovídám co nejdříve to jde a beru je jako přednostní. No pokud radsši kontakt preferuješ přes sociální sítě,
							najdeš mne zde{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Zde najdete spíše uryvky z mého života, proto prosím o vynechání pracovních témat v DMs.
							Děkuji za tvůj zájem a těším se až se potkáme!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
