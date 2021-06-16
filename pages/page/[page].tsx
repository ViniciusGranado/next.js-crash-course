import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const routeToHomePage = () => {
    router.push('/');
  }

  return (
    <>
      <h1>Hello {router.query.page}</h1>
      <button onClick={routeToHomePage}>Home</button>
    </>
  )
}
