import classes from "./ServiceInfo.module.css";
import { PiTruckTrailerFill } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";

export default function ServiceInfo() {
  const services = [
    {
      icon: <PiTruckTrailerFill />,
      title: "Free Shipping",
      description: "Suffered Alteration in Some Form",
    },
    {
      icon: <FaMoneyBillAlt />,
      title: "Cash on Delivery",
      description: "The Internet Tend To Repeat",
    },
    {
      icon: <BsArrowRepeat />,
      title: "45 Days Return",
      description: "Making it Look Like Readable",
    },
    {
      icon: <LuClock3 />,
      title: "Opening All Week",
      description: "8AM - 09PM",
    },
  ];

  return (
    <div className={classes.mainDiv}>
      {services.map((service, index) => (
        <div key={index} className={classes.serviceCard}>
          <div className={classes.icon}>{service.icon}</div>
          <div className={classes.info}>
            <span>{service.title}</span>
            <span>{service.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
