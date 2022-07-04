import { gql, useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next'
import fetchAPI from '../utils/FetchAPI';


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
