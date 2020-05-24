const userSearchQuery = `
    query ($query: String!, $first: Int, $last: Int, $before: String, $after: String) {
        search(query: $query, type: USER, first: $first, last: $last, before: $before, after: $after) {
            edges {
                cursor
                node {
                    ... on User {
                        id
                        name
                        login
                        email
                        url
                        avatarUrl
                        bioHTML
                        followers {
                            totalCount
                        }
                        websiteUrl
                        location
                        companyHTML
                        starredRepositories {
                            totalCount
                        }
                    }
                }
            }
            pageInfo {
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
            }
            userCount
        }
    }
`;

export default userSearchQuery;