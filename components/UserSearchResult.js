import Avatar from './Avatar'
import UserCard from './UserCard'

function stripOuterDivs(html) {
    const pattern = /<div>(.*)<\/div>/i
    return html.replace(pattern, '$1')
}

const UserSearchResult = ({ avatarUrl, login, name, url, email, bioHTML, websiteUrl, location, companyHTML, followers, starredRepositories }) => (
    <UserCard className="flex flex-wrap">
        <header className={`flex flex-col items-center text-center text-sm text-gray-700 mr-8 w-24${bioHTML ? ' pb-6' : ''}`}>
            <Avatar url={avatarUrl} />
            <span className="block mt-2 font-semibold leading-none">{name}</span>
        </header>
        <section className="stack stack-sm flex-1 flex flex-col pt-4">
            <div>
                <h2 className="text-3xl leading-none mb-1">
                    <a className="link text-indigo-600 hover:text-indigo-800 transition-colors duration-200" href={url} target="_blank"><strong>{login}</strong></a>
                </h2>
                <div className="stack-x stack-xs text-sm text-gray-600">
                    {companyHTML && <span dangerouslySetInnerHTML={{__html: stripOuterDivs(companyHTML)}}></span>}
                    <em>{location}</em>
                </div>                
                {/*<a className="px-4 py-2 text-sm font-bold lowercase leading-none bg-orange-600 hover:bg-orange-500 text-white rounded-md" href={url} target="_blank">View Profile ></a>*/}
            </div>
            <div dangerouslySetInnerHTML={{__html: bioHTML}}></div>
            <footer className="stack-x stack-sm flex flex-wrap items-center text-sm mt-auto leading-none pt-3 text-gray-600">
                {email && <a href={`mailto:${email}`}>{email}</a>}
                {websiteUrl && <a href={websiteUrl}>{websiteUrl}</a>}
                { followers &&
                    <span className="ml-auto">
                        <strong className="text-gray-700">{followers.totalCount}</strong> <span>followers</span>
                    </span>
                }
                {starredRepositories &&
                    <span>
                        <strong className="text-gray-700">{starredRepositories.totalCount}</strong> <span>stars</span>
                    </span>
                }
            </footer>   
        </section>           
    </UserCard>
)

export default UserSearchResult;