import { gql, useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next'


const GET_URL_QUERY = `query GetUrl($shortId: String!) {
    getUrl(shortId: $shortId) {
      url      
    }
  } 
`

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const { shortId } = router.query;

  return (
    <div>{shortId}</div>  
  )
}


export default RedirectPage;

async function fetchAPI(query: any, { variables, preview }: {variables?: any, preview?: boolean} = {}) {
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { shortId } = context.params!;
  const data = await fetchAPI(
    GET_URL_QUERY,
    {
      preview: true,
      variables: {
        shortId: shortId
      },
    }
  )

  if (data) {
    return {
      redirect: {
        destination: data.getUrl.url,
        permanent: false,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}
