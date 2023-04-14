import Nav from '../components/Nav'
import CarroselBg from '../components/CarroselBg'
import Advantage from '../components/Advantage'
import Prices from '../components/Prices'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Schedules from '../components/Schedules'

export default function Home() {
  return (
    <>
      <Nav />
      <CarroselBg />
      <div className="globalBg">
        <Advantage />
        <Prices />
        <Category />
        <Schedules />
        <Footer />
      </div>
    </>
  )
}
