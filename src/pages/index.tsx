import Nav from '../components/Nav'
import CarroselBg from '../components/CarroselBg'
import Advantage from '../components/Advantage'
import Prices from '../components/Prices'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Schedules from '../components/Schedules'
import CalculatorIMC from '../components/Calculator'

export default function Home() {
  return (
    <>
      <Nav />
      <CarroselBg />
      <Advantage />
        <Prices />
        <Category />
        <Schedules />
        <CalculatorIMC />
        <Footer />
    </>
  )
}
