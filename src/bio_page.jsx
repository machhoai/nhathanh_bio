import { useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { div } from "framer-motion/client";

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: "Facebook.png" },
  { name: "Instagram", url: "https://twitter.com", icon: "Instagram.png" },
  { name: "Email", url: "https://linkedin.com", icon: "Gmail.png" },
  { name: "Calling", url: "https://github.com", icon: "call-outline.svg" },
];

export default function Bio() {
  useEffect(() => {
    document.title = "My Bio";
  }, []);

  return (
    <BioCard/>
  );
}

function BioCard(){
    return (
        <div className="w-2/3 h-1/3 flex justify-center content-center items-center m-auto p-10 relative">
            <div className="img-card w-1/2 mr-10">
                <img src="/images/avatar.png" alt="Avatar" className="w-full" />
            </div>
            <div className="info-card w-1/2 flex flex-col justify-start h-full">
                <div className="major absolute top-10">
                    <p>Multi Media</p>
                </div>
                <div className="name">
                    <p className="text-[3vw] leading-[5vw] font-medium items-start">Nguyễn Trần Nhã Thanh</p>
                </div>
                <div className="information space-y-3">
                    <span className="flex justify-between w-3/4 text-2xl">
                        <p>Birthday:</p>
                        <p>13/09/2004</p>
                    </span>
                    <span className="flex justify-between w-3/4 text-2xl">
                        <p>School:</p>
                        <p>Van Lang University</p>
                    </span>
                </div>
                <div className="flex justify-between social-links absolute bottom-10">
                    {socialLinks.map((link, index) => (
                        <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl px-3 py-2 rounded-full text-white shadow-lg bg-white hover:scale-110 transition duration-300 ${link.color} flex justify-center items-center`}
                        // whileHover={{ scale: 1.2, rotate: 10 }}
                        // whileTap={{ scale: 0.9 }}
                        >
                        <img src={`/images/${link.icon}`} className="mr-2 !h-5 object-cover" alt="" />
                        <p className="text-black text-[1rem]">{link.name}</p>
                        </motion.a>
                    ))}
                    </div>
            </div>
        </div>
    );
}