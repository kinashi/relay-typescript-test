import { Environment, FetchFunction, Network, RecordSource, Store, RequestParameters, Variables, CacheConfig } from 'relay-runtime'

interface FetchApiProps {
  query: RequestParameters['text']
  variables: Variables
}

const fetchApi = async ({ query, variables }: FetchApiProps) => {
  const response = await fetch('https://example.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    })
  })

  return response.json()
}

const fetchRelay: FetchFunction = async (
  request: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig
) => fetchApi({
  query: request.text,
  variables,
})

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})
