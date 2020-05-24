import { useRouter } from 'next/router'
import { useQuery } from 'urql'
import { v4 as uuid } from 'uuid'
import userSearchQuery from 'queries/search-user'
import Pager from 'components/Pager'
import UserSearchResult from 'components/UserSearchResult'

const resultLimit = 10;

function getSearchQueryVariables({ query, before, after }) {
    if (before)
        return {
            query,
            last: resultLimit,
            before
        }
    
    if (after)
        return {
            query,
            first: resultLimit,
            after
        }

    return { 
        query,
        first: resultLimit
    };
}

const SearchResults = () => {
    const router = useRouter();
    const { query } = router.query;
    const [{ data, fetching, error }] = useQuery({
        query: userSearchQuery,
        variables: getSearchQueryVariables(router.query)
    });

    const users = data 
        ? data.search.edges.map(edge => edge.node) 
        : new Array(10).fill(null).map(() => ({ id: uuid() }));

    if (error)
        return <h1 className="text-4xl">We couldn’t find any users matching '{query}'</h1>

    return (
        <section className="w-full max-w-4xl py-12 px-8">
            <div className="flex justify-between items-end mb-4">
                <h1 className="text-4xl">{data ? data.search.userCount + ' users' : 'Users'} matching <strong>'{query}'</strong></h1>
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