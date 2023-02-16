import Container from "@/components/Atom/Container";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
}
