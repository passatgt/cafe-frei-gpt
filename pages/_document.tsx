import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Frei Tamás kávé név generátor" />
					<meta property="og:site_name" content="Frei Tamás kávé név generátor" />
					<meta property="og:description" content="ChatGPT API-val generált random kávénevek." />
					<meta property="og:title" content="Frei Tamás kávé név generátor" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Frei Tamás kávé név generátor" />
					<meta name="twitter:description" content="ChatGPT API-val generált random kávénevek." />
					<meta property="og:image" content="og-image.png" />
					<meta name="twitter:image" content="og-image.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
