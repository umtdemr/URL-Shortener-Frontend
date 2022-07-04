export default async function fetchAPI(query: any, { variables, preview }: {variables?: any, preview?: boolean} = {}) {
  const res = await fetch('http://localhost:4000' + (preview ? '/graphql' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}
