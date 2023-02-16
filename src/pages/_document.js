import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="fr" className="">
			<Head>
				<link
					rel="stylesheet"
					href="https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
