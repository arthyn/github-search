import searchQuery from 'queries/search-user'

const client = require('graphql-client')({
  url: 'https://api.github.com/graphql',
	headers: { Authorization: `Bearer ${process.env.GITHUB}` }
});

export default async (req, res) => {
  console.log('body', req.body)
  try {
    const response = await client.query(searchQuery, req.body.variables, (req, res) => {
      if(res.status === 401) {
        throw new Error('Not authorized')
      }
    });
    console.log('response', response)
    res.statusCode = 200
    res.json(response.data)
  } catch (error) {
    console.log('error', error)
    res.statusCode = 500
    res.json(error)
  }
}
