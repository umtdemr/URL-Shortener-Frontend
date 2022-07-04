import { NextPage } from 'next';
import { GetServerSideProps } from 'next'
import Link from 'next/link';
import fetchAPI from '../utils/FetchAPI';


const GET_URL_QUERY = `query GetUrl($shortId: String!) {
    getUrl(shortId: $shortId) {
      url      
    }
  } 
`

const RedirectPage: NextPage = () => {
  return (
    <div className='error_page'>
      <div className='error_page__content'>
        <h3>the url you looked for is missing.</h3>
        <Link href="/">
          <a className='btn'>create it</a>
        </Link>
      </div>
    </div>
  )
}


export default RedirectPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { shortId } = context.params!;
  const res = await fetchAPI(
    GET_URL_QUERY,
    {
      preview: true,
      variables: {
        shortId: shortId
      },
    }
  )
  const data = res.data;


  if (data) {
    return {
      redirect: {
        destination: data.getUrl.url,
        permanent: false,
      },
    }
  }

  return {
    props: {
    },
  }
}
