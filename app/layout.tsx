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

        <body className="p-08">    
       
            <Image loading="eager" width={ 150 } height={ 250 } src={ portrait } alt="main image" className="ml-[47%] max-sm:ml-[40%]"/>
            <Navigation />

            <h1 className="w-[15.0em] ml-[45%] max-sm:ml-[25%] heading-style digitizer rounded-xl p-2" style={{ backdropFilter: 'blur(5px)', border: '0.2em solid black' }}>Ross Marinaro Portfolio</h1>

            <div className="flex flex-col items-center mt-5">
                { children }       
                <Footer />
            </div>

        </body>

        <FlyonuiScript />

      </AppStore>

    </html>
  )
}
