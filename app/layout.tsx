
import './globals.css' 
import './blog.css' 

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Head from 'next/head'
import Navigation from './components/nav'
import AppStore from './context/appStore'
import Footer from './components/Footer'
import FlyonuiScript from './components/flyonUILoader'
import Game from './components/Game'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ross Marinaro Portfolio',
  description: 'Personal Artist Portfolio'
}


//---------------------------------------------


export default function RootLayout({ children }: { children: React.ReactNode }) 
{

  return (

    <html lang="en" className={ inter.className } >

      <Head>
        
        <title>Ross Marinaro Portfolio</title> 
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </Head>

      <AppStore>
 
        <body>    

            <Suspense fallback={<div>Loading...</div>}>
                <Game />
                <br />
            </Suspense>

            <div className="lg:w-[60%] flex flex-col flex-wrap items-center md:mt-5 max-sm:mt-[20%] lg:ml-[20%]">
                { children }           
                <Footer />
            </div>
            <Navigation />
        </body>

        <FlyonuiScript />

      </AppStore>

    </html>
  )
}
