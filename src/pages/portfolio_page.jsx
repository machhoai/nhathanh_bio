import React from "react";
import CurveText from "../components/CurveText";
import ReactCurvedText from 'react-curved-text';

const PortfolioPage = () => {
    const paragraphPage2 = "Xin chào! Tôi là sinh viên năm 3 ngành Truyền thông đa phương tiện, đam mê kể chuyện qua hình ảnh, ngôn từ và chuyển động. Tôi có kinh nghiệm sản xuất nội dung đa nền tảng, từ viết kịch bản, quay dựng video đến thiết kế hình ảnh, đồng thời luôn cập nhật xu hướng để tạo ra sản phẩm hấp dẫn và ý nghĩa. Tôi mong muốn được phát triển trong lĩnh vực truyền thông-nơi tôi có thể học hỏi liên tục, đóng góp sức trẻ cho những dự án thực tế và tiếp tục sáng tạo với mục tiêu rõ ràng.";
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <section
                className={`h-screen w-full flex items-center justify-center snap-start relative overflow-hidden`}
            >
                <img src="/portfolio/page_1/Picture1.png" className="z-1 w-full absolute bottom-0" alt="" />
                <img src="/portfolio/page_1/Picture2.png" className="z-1 w-1/3 absolute -bottom-40 -left-40" alt="" />
                <img src="/portfolio/page_1/Picture3.png" className="z-0 w-1/3 absolute -top-10 right-0" alt="" />
                <img src="/portfolio/page_1/Picture4.png" className="z-1 w-1/3 absolute -top-70 right-40" alt="" />
                <img src="/portfolio/page_1/Picture6.png" className=" w-1/4 absolute top-40 z-0 -right-10" alt="" />
                <span className="absolute z-1 font-greenth uppercase text-[180pt] xl:text-[280pt] xl:left-40 xl:top-20 md:left-[5%] md:top-1/4 left-5 top-1/4 leading-none">
                    <span className="flex relative">
                        <p className="text-[#184deb] relative top-10 -rotate-10">P</p>
                        <p className="text-[#184deb]">O</p>
                        <p className="text-[#184deb] relative top-0 rotate-5">R</p>
                        <p className="text-[#184deb] relative top-6 rotate-10">T</p>
                    </span>
                    <span className="flex relative left-90 -top-15">
                        <p className="text-[#ff41a8] relative top-0 rotate-6">f</p>
                        <p className="text-[#ff41a8] relative top-5">o</p>
                        <p className="text-[#ff41a8] relative top-6 -rotate-2">l</p>
                        {/* <p className="text-[#ff41a8] relative top-5 -rotate-4">i</p> */}
                        <img src="/portfolio/page_1/Picture7.png" className="h-[270px] relative top-15" alt="" />
                        <p className="text-[#ff41a8] relative top-2">o</p>
                    </span>
                </span>
            </section>
            <section
                className={`h-screen flex w-full snap-start relative overflow-hidden`}
            >
                <div className="h-full flex-grow relative flex-col items-center justify-start">
                    <img src="/portfolio/page_2/Picture1.png" className="h-screen" alt="" />
                    <div className="absolute top-0 left-0 w-full flex-col items-center justify-center">
                        <span className="z-20 flex-col items-center justify-center">
                            <ReactCurvedText width='430'
                                height='50'
                                cx='215'
                                cy='133'
                                rx='468'
                                ry={100}
                                startOffset='296'
                                reversed={true}
                                text='NGUYỄN TRẦN NHÃ THANH'
                                textProps={{ "style": { "fontSize": "30" } }}
                                textPathProps={null}
                                tspanProps={null}
                                ellipseProps={null}
                                svgProps={null} />
                        </span>
                        <div className="absolute z-20 w-2/3 flex flex-col items-center justify-center left-15">

                            <img
                                src="/portfolio/page_2/Picture3.png"
                                alt=""
                                className="size-2/3 object-contain absolute"
                            />
                            <img
                                src="/portfolio/page_2/Picture6.png"
                                alt=""
                                className="size-full object-contain"
                            />
                        </div>
                    </div>

                    <img
                        src="/portfolio/page_2/Picture4.png"
                        className="absolute -right-[10%] w-1/3 top-1/2"
                        alt=""
                    />
                </div>

                <div className="h-full w-[60%] relative flex flex-col items-center justify-start pt-20">
                    <img src="/portfolio/page_2/Picture5.png" className="absolute right-0 -z-1 w-2/5 top-2/4" alt="" />
                    <span className="pr-15 px-10 flex flex-col gap-15 z-2">
                        <span className="relative flex justify-center gap-8 font-greenth uppercase text-[120pt] leading-none">
                            <span className="flex relative">
                                <p className="text-[#184deb] relative top-6 -rotate-10">A</p>
                                <p className="text-[#184deb] relative top-2 -rotate-6">B</p>
                                <p className="text-[#184deb] relative top-0 rotate-0">o</p>
                                <p className="text-[#184deb] relative top-2 rotate-6">u</p>
                                <p className="text-[#184deb] relative top-6 rotate-10">T</p>
                            </span>
                            <span className="flex relative">
                                <p className="text-[#ff41a8] relative top-6 -rotate-6">m</p>
                                <p className="text-[#ff41a8] relative top-6 rotate-6">e</p>
                            </span>
                        </span>
                        <p className="z-2 text-3xl leading-10 text-justify text-[#184deb]">{paragraphPage2}</p>
                    </span>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
