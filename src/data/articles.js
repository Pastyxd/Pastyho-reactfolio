import React from "react";

function article_1() {
	return {
		date: "7.2 2023",
		title: "Benefity zadržování dechu pod vodou.",
		description:
			"Díky tomu budete ve vodě sice rychlejší, ale budete mít méně kyslíku, proto je potřeba si v tomto najít balanc. Vyhnete se také mnoha technickým chybám.",
		keywords: [
			"Benefity zadržování dechu pod vodou",
			"Pasty",
			"plavani",
			"swim",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Obsah článku</div>
					<img
						src="https://ibb.co/p2LjK6B"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "6.2 2023",
		title: "Mentální retardace v bazénu.",
		description:
			"Dávejte si pozor, z plavání Vám hrozí mentální retardace, kterou je velmi těžké léčit. Tak pozor želvy.",
		style: ``,
		keywords: [
			"plavání a retardace",
			"zelva",
			"thurtle",
			"retard",
		],
		body: (
			<React.Fragment>
				<h1>Obsah článku</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
