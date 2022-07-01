import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client'


// TODO: make sure url will be provided from env file in future 
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
