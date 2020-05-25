import Head from 'next/head'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import useSearch from 'hooks/useSearch'
import Pager from 'components/Pager'
import SearchBar from 'components/SearchBar'
import UserSearchResult from 'components/UserSearchResult'

const SearchResults = () => {
    const router = useRouter();
    const { query } = router.query;
    console.log('component', router.query)
    const { data, fetching, error } = useSearch(router.query);
    console.log('data', data)
    const users = data 
        ? data.search.edges.map(edge => edge.node) 
        : new Array(10).fill(null).map(() => ({ id: uuid() }));

    if (error)
        return (
            <section className="w-full max-w-4xl py-12 px-4 sm:px-8">
                <SearchBar query={query} />
                <h1 className="text-4xl">We couldn’t find any users matching '{query}'</h1>
            </section>
        );

    return (
        <section className="w-full max-w-4xl py-12 px-4 sm:px-8">
            <Head>
				<title>{query} | Github User Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <SearchBar query={query} onSearch={(queryValue) => router.push('/search/[query]', `/search/${queryValue}`)}/>
            <div className="flex justify-between items-end mb-4 my-12">
                <h1 className="text-2xl md:text-4xl ml-2">{data ? data.search.userCount + ' users' : 'Users'} matching <strong>'{query}'</strong></h1>
                <Pager query={query} pageInfo={data && data.search.pageInfo}/>
            </div>
            <ul className="list-none stack">
                {users.map(user => (<UserSearchResult key={user.id} placeholder={fetching || !user.login} {...user}/>))}
            </ul>
            <Pager className="mt-4" query={query} pageInfo={data && data.search.pageInfo}/>
        </section>
    );
}

export default SearchResults;