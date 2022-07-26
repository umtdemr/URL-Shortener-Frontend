import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
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
