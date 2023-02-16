import "../styles/globals.css";
import Container from "../components/Atom/Container.jsx";

export default function App({ Component, pageProps }) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
}
