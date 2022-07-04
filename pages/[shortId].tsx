import { NextPage } from 'next';
import { useRouter } from 'next/router';


const RedirectPage: NextPage = () => {
  const router = useRouter();
  const { shortId } = router.query;

  return (
    <div>{shortId}</div>  
  )
}


export default RedirectPage;
