import Hero from './sessions/Hero'
import PopularProduct from './sessions/PopularProducts'
import SuperQuality from './sessions/SuperQuality'
import Services from './sessions/Services'
import SpecialOffer from './sessions/SpecialOffer'
import CustomerReviews from './sessions/CustomerReviews'
import Subscribe from './sessions/Subscribe'
import Footer from './sessions/Footer'
import Nav from './Components/Nav'

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding px-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)
export default App