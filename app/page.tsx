import dynamic from 'next/dynamic'
import { Suspense } from 'react'


const Main = dynamic(() => import ('./home/page')/* , { suspense: true } */);

export default function Home() 
{

  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>

  );
}
