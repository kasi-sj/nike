import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <div>
      <session id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl   capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red ">
            Super
          </span> 
          <br/>
          <span className="text-coral-red ">
            Quality
          </span> Shoes
        </h2>
        <p className="lg:max-w-lg info-text">
          Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, provided you with unmatched quality, innovation, and a touch of elegance
        </p>
        <p className="mt-16 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your  satisfaction
        </p>
        <div className="mt-11 ">
        <Button label="View Details" iconURL={arrowRight}/>
        </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            height={570}
            width={522}
            className=" object-contain"
          />
        </div>
      </session>
    </div>
  )
}

export default SuperQuality
