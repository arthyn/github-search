import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Pager = ({ className, query, pageInfo }) => {
    if (!pageInfo)
        return null;

    const { startCursor, endCursor, hasPreviousPage, hasNextPage } = pageInfo;
    const before = startCursor && hasPreviousPage ? '?before=' + startCursor : '';
    const after = endCursor && hasNextPage ? '?after=' + endCursor : '';

    return (
        <nav className={`flex justify-end items-center ${className}`}>
            {before && 
                <Link href={`/search/[query]${before}`} as={`/search/${query}${before}`}>
                    <a className="inline-flex items-center">
                        <FontAwesomeIcon className="text-base" icon={faAngleLeft} />
                        <span className="text-sm uppercase font-semibold ml-1">Previous</span>
                    </a>
                </Link>
            }
            {after && 
                <Link href={`/search/[query]${after}`} as={`/search/${query}${after}`}>
                    <a className="inline-flex items-center ml-4">
                        <span className="text-sm uppercase font-semibold mr-1">Next</span>
                        <FontAwesomeIcon className="text-base" icon={faAngleRight} />
                    </a>
                </Link>
            }
        </nav>
    )
}

export default Pager