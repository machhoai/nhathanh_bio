import React from "react";
import CurveText from "../components/CurveText";

const PortfolioPage = () => {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <section
                className={`h-screen w-full flex items-center justify-center snap-start relative overflow-hidden`}
            >
                <img src="/portfolio/page_1/Picture1.png" className="z-1 w-full absolute bottom-0" alt="" />
                <img src="/portfolio/page_1/Picture2.png" className="z-1 w-1/3 absolute -bottom-40 -left-40" alt="" />
                <img src="/portfolio/page_1/Picture3.png" className="z-0 w-1/3 absolute -top-10 right-0" alt="" />
                <img src="/portfolio/page_1/Picture4.png" className="z-1 w-1/3 absolute -top-70 right-40" alt="" />
                <img src="/portfolio/page_1/Picture5.png" className="z-1 w-1/4 absolute top-40 -right-40" alt="" />
                <span className="absolute  font-greenth uppercase text-[180pt] xl:text-[270pt] xl:left-20 xl:top-20 md:left-[5%] md:top-1/4 left-5 top-1/4 leading-none">
                    <span className="flex relative">
                        <p className="text-[#184deb] relative top-10 -rotate-10">P</p>
                        <p className="text-[#184deb]">O</p>
                        <p className="text-[#184deb] relative top-0 rotate-5">R</p>
                        <p className="text-[#184deb] relative top-6 rotate-10">T</p>
                    </span>
                    <span className="flex relative left-60 -top-15">
                        <p className="text-[#ff41a8] relative top-0 rotate-6">f</p>
                        <p className="text-[#ff41a8] relative top-5">o</p>
                        <p className="text-[#ff41a8] relative top-6 -rotate-2">l</p>
                        <p className="text-[#ff41a8] relative top-5 -rotate-4">i</p>
                        <p className="text-[#ff41a8] relative top-2">o</p>
                    </span>
                </span>

            </section>
        </div>
    );
};

export default PortfolioPage;
