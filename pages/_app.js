import '../styles/main.css';

const App = ({ Component, pageProps }) => (
	<main className="flex justify-center min-h-screen">
		<Component {...pageProps} />
	</main>
)

export default App;