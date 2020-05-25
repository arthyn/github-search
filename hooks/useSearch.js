import { useState, useEffect } from 'react'

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

function useSearch(routerQuery) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!routerQuery.query)
            return

        fetch('/api/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ variables: getSearchQueryVariables(routerQuery) })            
        })
        .then(async res => {
            const responseData = await res.json();

            if (!res.ok) {
                const error = (responseData && responseData.message) || res.status;
                return Promise.reject(error);
            }

            setData(responseData);
        })
        .catch(error => {
            setError(error);
        })        
    }, [routerQuery])

    return {
        data,
        error,
        fetching: !data && !error
    }
}

export default useSearch