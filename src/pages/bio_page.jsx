// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="flex justify-center items-center  h-screen bg-cyan-400 p-2 text-neutral-900 overflow-hidden">
      <div className="max-w-lg w-full h-fit bg-white shadow-lg rounded-2xl overflow-hidden">
        <img className="relative w-full h-32"  src="/images/card_background.png" alt="card background" />
        <div className="flex flex-col items-center -mt-12">
          <img
            className="size-44 rounded-full border-4 border-white z-40"
            src="/images/avatar.png"
            alt="Profile"
          />
          <h2 className="mt-2 text-2xl font-semibold">Nguyễn Trần Nhã Thanh</h2>
          <p className="text-gray-500 text-center px-6">
            I have a passion for content creation, media design, and always seek opportunities to learn and grow in this field.
            Feel free to connect with me through the channels below for collaboration and discussion! 🌟
          </p>
        </div>
        <div className="flex flex-col gap-3 p-6">
          <button style={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)"}} className="relative w-full justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
            onClick={() => window.open("/", "_blank")}>
            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                <img src="/images/portforlio_icon.png" className="size-6 mr-2" alt="" />
                Visit my portfolio
            </span>
            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
            </span> 
          </button>
          <button style={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)"}} className="relative w-full justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
          onClick={() => window.open("https://www.facebook.com/nhathanh.nguyentran.75", "_blank")}>
            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                <img src="/images/facebook_icon.png" className="size-6 mr-2" alt="" />
                Facebook
            </span>
            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
            </span> 
          </button>
          <button style={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)"}} className="relative w-full justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
          onClick={() => window.open("https://www.instagram.com/nhjh.thanh/", "_blank")}>
            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                <img src="/images/instagram_icon.png" className="size-6 mr-2" alt="" />
                Instagram
            </span>
            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
            </span> 
          </button>
          {/* <button style={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)"}} className="relative w-full justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4">
            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                <img src="/images/zalo_icon.png" className="size-6 mr-2" alt="" />
                Zalo
            </span>
            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
            </span> 
          </button> */}
          <button style={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)"}} className="relative w-full justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
          onClick={() => alert("Sorry, this feature is not available yet.")}>
            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                <img src="/images/youtube_icon.png" className="size-6 mr-2" alt="" />
                My channel
            </span>
            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
            </span> 
          </button>
        </div>
      </div>
    </div>
  );
}