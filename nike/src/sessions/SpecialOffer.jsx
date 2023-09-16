import { offer } from "../assets/images"
import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl   capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          
        < span className="text-coral-red ">
            Special
          </span>  Offer
        </h2>
        <p className="lg:max-w-lg info-text pt-10">
        Welcome to our exclusive limited-time offer!  thrilled to bring you unbeatable savings on [Product/Service]. For a short period, you can enjoy a fantastic [X]% discount on your purchase. Whether you have had your eye on our top-rated shoes
        </p>
        <p className="lg:max-w-lg info-text pt-10">
        or are looking to indulge in our premium [Service], now is the perfect time to treat yourself or surprise a loved one. Do not miss out on this incredible opportunity to get more for less. Hurry, as this offer is available for a limited time only
        </p>
        <div className="mt-11 flex flex-wrap  justify-center items-center gap-4">
        <Button label="Shop Now" iconURL={arrowRight}/>
        <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer
