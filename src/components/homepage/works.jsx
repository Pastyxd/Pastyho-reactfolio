import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Práce"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./zlpk.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Zlínský plavecký klub</div>
							<div className="work-subtitle">
								Plavec
							</div>
							<div className="work-duration">2021 - Do dnes</div>
						</div>

						<div className="work">
							<img
								src="./zlpk.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Zlínský plavecký klub</div>
							<div className="work-subtitle">
								Trenér
							</div>
							<div className="work-duration">2015 - Do dnes</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
