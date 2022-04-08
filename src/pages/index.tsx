import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
// import Footer from '../components/Footer'
import Header from '../components/Header'
import NftImages from '../components/NftImages'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'
// import NftDisplay from '../components/NftDisplay'
// import ProjectRoadmap from '../components/ProjectRoadmap'



const Home: NextPage = () => {
  return (
    <div className='bg-metal'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>
      <NftImages/>
      <Roadmap/>
      <Footer/>

      
    </div>
  )
}

export default Home
