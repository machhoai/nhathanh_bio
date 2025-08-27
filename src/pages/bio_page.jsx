// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import React, { useState } from "react";
import { ArrowRight, Share2, Link, QrCode } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QRCodeCanvas } from 'qrcode.react';
// import Toast from "../components/CustomToast";
import { useToast } from "../components/CustomToast"; // đường dẫn file Toast bên trên
import { motion } from "framer-motion";
import clsx from 'clsx';
import { useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";

export default function ProfileCard() {
    const { showToast, ToastComponent } = useToast();
    const navigate = useNavigate();
    const [showQR, setShowQR] = useState(false);
    const shareData = {
        title: 'Nhã Thanh - Bio Card',
        text: 'Check out my bio card!',
        url: 'https://nhathanh.vercel.app/bio',
    };

    const handleShare = async () => {
        if (navigator.canShare) {
            navigator.share(
                shareData
            )
                .then(() => console.log('Chia sẻ thành công'))
                .catch((error) => console.log('Lỗi khi chia sẻ:', error));
        } else {
            toast.error("Chia sẽ không thành công");
        }
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareData.url);
            showToast("Đã sao chép liên kết!");
        } catch (err) {
            console.error('Không thể sao chép liên kết:', err);
            alert('Trình duyệt không hỗ trợ chia sẻ hoặc sao chép');
        }
    };

    const handleShowQR = () => {
        setShowQR(!showQR);
    };

    const handleCloseQR = () => {
        setShowQR(false);
    };

    return (
        <div className="flex justify-center items-center  h-[100dvh] bg-cyan-400 p-2 text-neutral-900 overflow-hidden">
            <div className="max-w-lg w-full h-fit bg-white shadow-lg rounded-2xl overflow-hidden relative">
                <div className="ActionButtons flex absolute top-5 right-5 z-10 text-white">
                    <button className="ShareButton hover:bg-gray-400/50 active:bg-gray-400/50 rounded-xl p-2" onClick={() => handleCopyLink()}>
                        <Link className="size-6" />
                    </button>
                    <button className="ShareButton hover:bg-gray-400/50 active:bg-gray-400/50 rounded-xl p-2" onClick={() => handleShare()}>
                        <Share2 className="size-6" />
                    </button>
                    <button className={clsx(
                        'ShareButton hover:bg-gray-400/50 active:bg-gray-400/50 rounded-xl p-2',
                        { 'bg-gray-400/50': showQR }
                    )} onClick={() => handleShowQR()}>
                        <QrCode className="size-6" />
                    </button>
                </div>
                <img className="relative w-full h-32" src="/images/card_background.png" alt="card background" />
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
                <div className="flex overflow-hidden items-center relative h-full py-5">
                    <motion.div className="size-full flex justify-center items-center absolute h-fit"
                        animate={showQR ? { x: 0 } : { x: -1000 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                        <QRCodeCanvas
                            value="https://nhathanh.vercel.app/bio"
                            size={180}
                            bgColor="white"
                            fgColor="#3680c9"
                            level="H"
                            imageSettings={{
                                src: "/images/avatar.png",     // Đường dẫn ảnh logo
                                height: 40,
                                width: 40,
                                excavate: true,              // Làm trong phần QR dưới logo
                                opacity: 1,
                                crossOrigin: "anonymous"
                            }}
                            className="rounded-2xl overflow-visible"
                        />
                    </motion.div>
                    <motion.div className="flex flex-col gap-3 px-6 w-full h-fit"
                        // initial={{ opacity: 0, y: 20 }}
                        animate={!showQR ? { x: 0 } : { x: 1000 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                        <button style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }} className="relative w-full cursor-pointer justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
                            onClick={() => navigate("/portfolio")}>
                            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                                <img src="/images/portforlio_icon.png" className="size-6 mr-2" alt="" />
                                Visit my portfolio
                            </span>
                            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
                            </span>
                        </button>
                        <button style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }} className="relative w-full cursor-pointer justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
                            onClick={() => window.open("https://www.facebook.com/nhathanh.nguyentran.75", "_blank")}>
                            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                                <img src="/images/facebook_icon.png" className="size-6 mr-2" alt="" />
                                Facebook
                            </span>
                            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
                            </span>
                        </button>
                        <button style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }} className="relative w-full cursor-pointer justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
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
                        <button style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }} className="relative w-full cursor-pointer justify-between font-semibold rounded-full p-3 flex items-center hover:bg-indigo-950 group transition duration-200 ease-in-out px-4"
                            onClick={() => alert("Sorry, this feature is not available yet.")}>
                            <span className="flex items-center gap-2 group-hover:text-white transition duration-200">
                                <img src="/images/youtube_icon.png" className="size-6 mr-2" alt="" />
                                My channel
                            </span>
                            <span className="bg-indigo-950 text-white size-10 rounded-full absolute right-2  group-hover:bg-white group-hover:text-indigo-950 transition duration-200">
                                <ArrowRight className="m-auto h-full -rotate-45 group-hover:text-indigo-950" size={23} />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
            {ToastComponent}
        </div>
    );
}