import Image from 'next/image'
import Banner from './components/Home/Banner'
import Footer from './components/Footer'
import Showcase from './components/Home/Showcase'

export default function Home() {
  return (
    <main className="">
     <Banner></Banner>
     <Showcase></Showcase>
     <Footer></Footer>
    </main>
  )
}
