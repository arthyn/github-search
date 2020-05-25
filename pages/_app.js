import '../styles/main.css';

const App = ({ Component, pageProps }) => (
	<main className="flex justify-center min-h-screen text-lg text-gray-800 bg-yellow-500">
		<Component {...pageProps} />
	</main>
)

export default App;