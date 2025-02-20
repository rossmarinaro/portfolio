import './globals.css' 
import './blog.css' 

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Head from 'next/head'
import Navigation from './components/nav'
import AppStore from './context/appStore'
import Footer from './components/Footer'
import portrait from '../public/me.png'
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

            <Navigation />
       
            <Image loading="eager" width={ 150 } height={ 250 } src={ portrait } alt="main image" className="ml-[47%] max-sm:ml-[40%]"/>

            <div className="w-[80%] flex flex-col items-center mt-5 pl-[20%]">
                { children }           
                <Footer />
            </div>
  
        </body>

        <FlyonuiScript />

      </AppStore>

    </html>
  )
}
