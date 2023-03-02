import type { AppProps } from "next/app";
import "../styles/style.css";

function FreiApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default FreiApp;
