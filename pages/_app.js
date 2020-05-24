import '../styles/main.css';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: {
	  headers: { authorization: 'Bearer 1cebf92f1960ee68a4ce235de2f505a0c2cd2770' }
  }
});

const App = ({ Component, pageProps }) => (
	<main className="flex items-center justify-center min-h-screen text-lg text-gray-800 bg-yellow-500">
		<Provider value={client}>
			<Component {...pageProps} />
		</Provider>
	</main>
)

export default App;