import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Domov</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">O mně</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projekty</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Články</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Kontakt</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						©2023 pasty. 
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
