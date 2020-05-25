import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const SearchBar = ({ className, query, onSearch }) => {
    const [queryValue, setQueryValue] = useState('');
    const [id] = useState('search-' + uuid());
    useEffect(() => setQueryValue(query), [query]);

    const searchHandler = (event) => {
        event.preventDefault();
        onSearch(queryValue);
    }

    return (
        <form className={className} onSubmit={searchHandler}>
            <label htmlFor={id} className="block mb-1 ml-2 text-sm uppercase tracking-wider font-bold">Search Github Users</label>
            <div className="flex items-stretch rounded-md shadow-md">
                <input id={id} className="flex-1 p-2 leading-none text-2xl rounded-md rounded-r-none" type="text" placeholder="search" value={queryValue} onChange={(event) => setQueryValue(event.target.value)} />
                <button className="inline-flex items-center px-3 py-2 text-sm uppercase tracking-wider font-bold text-white rounded-md rounded-l-none bg-gray-800 hover:bg-indigo-600 transition-colors duration-200">
                    <FontAwesomeIcon className="w-4 mr-1" icon={faSearch} />
                    <span>Search</span>
                </button>
            </div>
        </form>
    );
}

export default SearchBar