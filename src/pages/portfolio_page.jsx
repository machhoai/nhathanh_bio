import React from "react";
import CurveText from "../components/CurveText";
import ReactCurvedText from 'react-curved-text';

const PortfolioPage = () => {
    const paragraphPage2 = "Xin chào! Tôi là sinh viên năm 3 ngành Truyền thông đa phương tiện, đam mê kể chuyện qua hình ảnh, ngôn từ và chuyển động. Tôi có kinh nghiệm sản xuất nội dung đa nền tảng, từ viết kịch bản, quay dựng video đến thiết kế hình ảnh, đồng thời luôn cập nhật xu hướng để tạo ra sản phẩm hấp dẫn và ý nghĩa. Tôi mong muốn được phát triển trong lĩnh vực truyền thông-nơi tôi có thể học hỏi liên tục, đóng góp sức trẻ cho những dự án thực tế và tiếp tục sáng tạo với mục tiêu rõ ràng.";
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <section
                className={`h-screen w-full flex items-center snap-start relative overflow-hidden`}
            >
                <img src="/portfolio/page_1/Picture1.png" className="z-1 w-full absolute bottom-0" alt="" />
                <img src="/portfolio/page_1/Picture2.png" className="z-1 w-1/3 absolute -bottom-40 -left-40" alt="" />
                <img src="/portfolio/page_1/Picture3.png" className="z-0 w-1/3 absolute -top-10 right-0" alt="" />
                <img src="/portfolio/page_1/Picture4.png" className="z-1 w-1/3 absolute -top-70 right-40" alt="" />
                <img src="/portfolio/page_1/Picture6.png" className=" w-1/4 absolute top-30 z-1 -right-10" alt="" />
                <span className="absolute z-1 font-greenth uppercase text-[18vw] left-1/9 leading-none">
                    <span className="flex relative">
                        <p className="text-[#184deb] relative top-10 -rotate-10">P</p>
                        <p className="text-[#184deb]">O</p>
                        <p className="text-[#184deb] relative top-0 rotate-5">R</p>
                        <p className="text-[#184deb] relative top-6 rotate-10">T</p>
                    </span>
                    <span className="flex relative left-[19vw] -top-[2vh]">
                        <p className="text-[#ff41a8] relative top-0 rotate-6">f</p>
                        <p className="text-[#ff41a8] relative top-5">o</p>
                        <p className="text-[#ff41a8] relative top-6 -rotate-2">l</p>
                        {/* <p className="text-[#ff41a8] relative top-5 -rotate-4">i</p> */}
                        <img src="/portfolio/page_1/Picture7.png" className="h-[13vw] relative top-12" alt="" />
                        <p className="text-[#ff41a8] relative top-2">o</p>
                    </span>
                </span>
            </section>
            <section
                className={`h-screen flex w-full snap-start relative overflow-hidden`}
            >
                <div className="h-full flex-grow relative flex-col items-center justify-start">
                    <img src="/portfolio/page_2/Picture1.png" className="h-screen" alt="" />
                    <div className="absolute flex-grow top-0 h-full left-0 w-full flex-col gap-10 flex justify-center">
                        <div className="z-20 text-[#fff467] xl:scale-100 md:scale-75 scale-30 flex flex-col items-center justify-center">
                            <ReactCurvedText
                                width={430}
                                height={50}
                                cx={215}
                                cy={133}
                                rx={468}
                                ry={100}
                                startOffset={296}
                                reversed={true}
                                text="NGUYỄN TRẦN NHÃ THANH"
                                textProps={{ style: { fontSize: "30px", fontWeight: "500" } }} // thêm fontWeight
                                textPathProps={{ "fill": "#fff467" }}
                                svgProps={{ className: "block mx-auto" }}  // ⬅️ block + mx-auto để căn giữa trong cha
                            />
                            <ReactCurvedText
                                width={430}
                                height={30}

                                cx={215}
                                cy={125}
                                rx={468}
                                ry={100}
                                startOffset={425}
                                reversed={true}
                                text="13-09-2004"
                                textProps={{
                                    style: {
                                        fontSize: "25px",
                                        fontWeight: "500",
                                        fill: "#fff467", // đổi màu chữ,
                                    }
                                }}
                                svgProps={{ className: "block mx-auto" }}
                            />
                            {/* <div className="w-fit bg-[#ff41a8] rounded-full px-1 py-1">

                                <svg width="200" height="30" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-100">
                                    <ellipse
                                        cx="108"
                                        cy="125"
                                        rx="468"
                                        ry="100"
                                        fill="none"
                                        stroke="#fff467"
                                        stroke-width="30"
                                    />
                                </svg>

                            </div> */}
                        </div>
                        <div className="relative z-20 w-2/3 flex flex-col items-center justify-center left-1/10">
                            <img
                                src="/portfolio/page_2/Picture3.png"
                                alt=""
                                className="w-2/3 object-contain absolute"
                            />
                            <img
                                src="/portfolio/page_2/Picture6.png"
                                alt=""
                                className="w-full object-contain"
                            />
                        </div>
                    </div>

                    <img
                        src="/portfolio/page_2/Picture4.png"
                        className="absolute -right-[10%] w-1/3 top-1/2"
                        alt=""
                    />
                </div>

                <div className="h-full w-[60%] relative flex flex-col items-center justify-center">
                    <img src="/portfolio/page_2/Picture5.png" className="absolute right-0 -z-1 w-2/5 top-2/4" alt="" />
                    <span className="pr-15 px-10 flex flex-col gap-15 z-2">
                        <span className="relative flex justify-center gap-8 font-greenth uppercase text-[8vw] leading-none">
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
                        <p className="z-2 text-[2vw] leading-[3vw] text-justify text-[#184deb]">{paragraphPage2}</p>
                    </span>
                </div>
            </section >
            <section
                className={`h-screen flex w-full snap-start relative overflow-hidden`}
            >
                <div className="backdrop relative flex flex-col items-center justify-start h-full w-full">
                    <img src="/portfolio/page_3/Picture3.png" className="w-full top-0 object-cover" alt="" />
                    <div className="main z-1 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 w-4/5 mx-auto text-[#294ffa] text-[3vh]">
                        <div className="text-box min-w-[400px] max-w-[500px]">
                            <p className="title uppercase font-bold mb-2">Học vấn</p>
                            <ul>
                                <li>2022-2026</li>
                                <li>Chuyên ngành Truyền thông đa phương tiện Trường đại học Văn Lang</li>
                            </ul>
                        </div>

                        <div className="text-box min-w-[400px] max-w-[500px]">
                            <p className="title uppercase font-bold mb-2">Kĩ năng mềm</p>
                            <ul className="list-disc list-inside">
                                <li>Tiếng anh giao tiếp</li>
                                <li>Làm việc nhóm</li>
                                <li>Kỹ năng nghiên cứu</li>
                                <li>Quản lý thời gian</li>
                            </ul>
                        </div>

                        <div className="text-box min-w-[400px] max-w-[500px]">
                            <p className="title uppercase font-bold mb-2">Liên lạc</p>
                            <ul className="list-disc list-inside">
                                <li>MOBILE: +84 522 946 280</li>
                                <li>EMAIL: ntnthanh139@gmail.com</li>
                            </ul>
                        </div>

                        <div className="text-box min-w-[400px] max-w-[500px] whitespace-nowrap">
                            <p className="title uppercase font-bold mb-2">Kĩ năng cứng</p>
                            <ul className="list-disc list-inside">
                                Thiết kế:
                                <li>Canva ★★★★☆</li>
                                <li>Adobe Illustrator ★★★☆☆</li>
                                <li>Adobe Photoshop ★★★☆☆</li>
                                Video:
                                <li>Capcut ★★★★☆</li>
                                <li>Adobe Premiere ★★★☆☆</li>
                            </ul>
                        </div>
                    </div>
                    <img src="/portfolio/page_3/Picture4.png" className="w-1/5 absolute top-1/3 left-1/3 object-cover" alt="" />
                    <img src="/portfolio/page_3/Picture5.png" className="w-1/4 absolute top-1/10 right-0  object-cover" alt="" />
                    <img src="/portfolio/page_3/Picture2.png" className="w-full absolute -bottom-1/30 object-cover" alt="" />
                </div>
            </section >
        </div >
    );
};

export default PortfolioPage;
