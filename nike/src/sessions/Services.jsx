import { services } from "../constants"
import ServicesCard from "../Components/ServicesCard"
const Services = () => {
  return (
    <session className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service)=>(
          <ServicesCard key={service.label} {...service}/>
        ))}
    </session>
  )
}

export default Services
