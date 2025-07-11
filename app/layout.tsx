
import './globals.css' 
import './blog.css' 

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Head from 'next/head'
import Navigation from './components/nav'
import AppStore from './context/appStore'
import Footer from './components/Footer'
import FlyonuiScript from './components/flyonUILoader'

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
            { children }    
            <div className="lg:w-[60%] flex flex-col flex-wrap items-center md:mt-5 max-sm:mt-[20%] lg:ml-[20%]"><Footer /></div>
            <Navigation />
        </body>

        <FlyonuiScript />

      </AppStore>

    </html>
  )
}
