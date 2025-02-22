import { HiChatBubbleLeftRight } from "react-icons/hi2";

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const iconMapping = {
  HiChatBubbleLeftRight: HiChatBubbleLeftRight,
  FaLocationDot: FaLocationDot,
  IoCall: IoCall,
};

const getIconComponent = (iconName) => {
  return iconMapping[iconName] || null;
};

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with us",
    link:"	https://wa.me/+917406834343",
    description: "Our friendly team is here to help.",
    details: "+91-7406834343",
  },
  {
    icon: "FaLocationDot",
    heading: "Visit us",
    link: "https://maps.app.goo.gl/26uPm8DchbrtxoKH8",
    description: "Come and say hello at our Studio.",
    details:
      "Kodichikkanahalli Main Rd, beside HP petrol pump, Seenappa Layout, Bommanahalli, Bengaluru, Karnataka 560076",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Sat From 8am to 10pm",
    details: "+91-7406834343",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = getIconComponent(ele.icon);
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                <a
                  target="_blank"
                  href={ele.link ? ele.link : "/"}
                  rel="noopener noreferrer"
                >
                  {ele?.heading}
                </a>
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
