import React from "react";
import { useRef, useState, useEffect } from "react";
import CurveText from "../components/CurveText";
import ReactCurvedText from 'react-curved-text';
import ScrollableGrid from "../components/ImageViewer";
import ImageViewer from "../components/ImageViewer";
import { ChevronDown } from "lucide-react"

const PortfolioPage = () => {
    const containerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const sections = container.querySelectorAll("section");
        setTotalPages(sections.length);

        const handleScroll = () => {
            let closestIndex = 0;
            let minDiff = Infinity;

            sections.forEach((section, i) => {
                const rect = section.getBoundingClientRect();
                const diff = Math.abs(rect.top); // khoảng cách từ đỉnh section tới viewport
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = i;
                }
            });

            setCurrentPage(closestIndex);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollNext = () => {
        const next = currentPage + 1;
        scrollToPage(next);
    };

    const scrollPrev = () => {
        const prev = currentPage - 1;
        scrollToPage(prev);
    };

    const scrollToPage = (index) => {
        if (!containerRef.current) return;
        const sections = containerRef.current.querySelectorAll("section");
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    const paragraphPage2 = "Xin chào! Tôi là sinh viên năm 3 ngành Truyền thông đa phương tiện, đam mê kể chuyện qua hình ảnh, ngôn từ và chuyển động. Tôi có kinh nghiệm sản xuất nội dung đa nền tảng, từ viết kịch bản, quay dựng video đến thiết kế hình ảnh, đồng thời luôn cập nhật xu hướng để tạo ra sản phẩm hấp dẫn và ý nghĩa. Tôi mong muốn được phát triển trong lĩnh vực truyền thông-nơi tôi có thể học hỏi liên tục, đóng góp sức trẻ cho những dự án thực tế và tiếp tục sáng tạo với mục tiêu rõ ràng.";
    return (
        <div ref={containerRef} className="h-screen min-h-screen  w-full overflow-y-scroll no-scrollbar -mr-8 snap-y snap-mandatory">
            <div className="action-button fixed bottom-20 right-5  size-10 z-100 flex flex-col justify-center items-center gap-1">
                <button
                    onClick={() => { scrollPrev() }}
                    disabled={currentPage === 0} // khi ở trang đầu thì disable nút prev
                    className={`p-2 rounded-full shadow z-50 
    ${currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-white"}`}
                >
                    <ChevronDown className="size-6 rotate-180" color="#184deb" />
                </button>

                <div className="w-full rounded-xl text-[#184deb] font-medium bg-white p-2 shadow">
                    <p className="text-center">{currentPage}</p>
                </div>

                <button
                    onClick={scrollNext}
                    disabled={currentPage === totalPages - 1} // khi ở trang cuối thì disable nút next
                    className={`p-2 rounded-full shadow z-50 
    ${currentPage === totalPages - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white"}`}
                >
                    <ChevronDown className="size-6" color="#184deb" />
                </button>
            </div>
            <section
                className={`h-screen min-h-screen max-h-screen w-full flex items-center snap-center snap-always relative overflow-hidden`}
            >
                <img src="/portfolio/page_1/Picture1.png" className="z-1 w-full absolute bottom-0" alt="" />
                <img src="/portfolio/page_1/Picture2.png" className="z-1 w-1/3 absolute -bottom-40 -left-40" alt="" />
                <img src="/portfolio/page_1/Picture3.png" className="z-0 w-1/3 absolute -top-10 right-0" alt="" />
                <img src="/portfolio/page_1/Picture4.png" className="z-1 w-1/3 absolute -top-70 right-40" alt="" />
                <img src="/portfolio/page_1/Picture6.png" className=" w-1/4 absolute z-1 -right-10" alt="" />
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
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="h-full flex-grow relative flex-col items-center justify-start">
                    <img src="/portfolio/page_2/Picture1.png" className="h-screen min-h-screen" alt="" />
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
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
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
            <section
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="backdrop size-full">
                    <img src="/portfolio/page_4/Picture4.png" className="h-full absolute top-0 left-0 object-cover" alt="" />
                    <img src="/portfolio/page_4/Picture3.png" className="w-full absolute bottom-0 left-0 object-cover" alt="" />
                    <div className="main flex h-full w-full items-center justify-start px-[2vw] relative z-1">
                        <img src="/portfolio/page_4/Picture5.png" className="w-1/5 object-cover absolute" alt="" />
                        <span className="relative flex flex-col justify-center gap-8 left-[10vw] font-payton-one font-[900] uppercase text-[10vw] leading-none">
                            <span className="flex relative">
                                <p className="text-[#fff467] relative top-12 -rotate-8">C</p>
                                <p className="text-[#fff467] relative top-6 -rotate-9">Á</p>
                                <p className="text-[#fff467] relative top-1 -rotate-8 mr-[2vw]">C</p>
                                <p className="text-[#fff467] relative -top-4 -rotate-7">D</p>
                                <p className="text-[#fff467] relative -top-7 -rotate-4 mr-[2vw]">Ự</p>
                                <p className="text-[#fff467] relative -top-8 rotate-1">Á</p>
                                <p className="text-[#fff467] relative -top-7 rotate-2">N</p>
                            </span>
                            <span className="flex relative left-[10vw]">
                                <p className="text-[#ff41a8] relative top-0 -rotate-6">h</p>
                                <p className="text-[#ff41a8] relative -top-3 -rotate-4">ọ</p>
                                <p className="text-[#ff41a8] relative -top-4 -rotate-2 mr-[2vw]">c</p>
                                <p className="text-[#ff41a8] relative -top-4 rotate-0">t</p>
                                <p className="text-[#ff41a8] relative -top-4 rotate-1">h</p>
                                <p className="text-[#ff41a8] relative -top-2 rotate-4">u</p>
                                <p className="text-[#ff41a8] relative top-1 rotate-5">ậ</p>
                                <p className="text-[#ff41a8] relative top-4 rotate-6">t</p>
                            </span>
                        </span>
                    </div>
                </div>
            </section>
            <section
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="backdrop size-full">
                    <img src="/portfolio/page_5/Picture1.png" className="-z-1 w-1/3 absolute bottom-0 left-[77%] object-cover" alt="" />
                    <img src="/portfolio/page_5/Picture2.png" className="-z-1 w-1/4 absolute top-1/4 right-5/6 object-cover" alt="" />

                    <div class="flex gap-[20px] h-full flex-col py-[2vw] px-[5vw]">
                        <div class="w-auto max-h-[500px] grow shrink">
                            <div class="flex gap-[20px] h-full justify-between items-center flex-row shrink">
                                <div class="w-auto h-full grow">
                                    <img src="/portfolio/page_5/Poster1.png" class="w-full h-full object-contain shrink" alt="" />
                                </div>
                                <div class="w-auto h-full grow">
                                    <img src="/portfolio/page_5/Poster2.png" class="w-full h-full object-contain shrink" alt="" />
                                </div>
                                <div class="w-auto h-full grow">
                                    <img src="/portfolio/page_5/Poster3.png" class="w-full h-full object-contain shrink" alt="" />
                                </div>
                                <div class="w-auto h-full grow">
                                    <img src="/portfolio/page_5/Poster4.png" class="w-full h-full object-contain shrink" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="w-auto grow shrink-0 text-[#184deb] text-[1.3vw]">
                            <p class="title font-semibold text-[2vw]">PHIM NGẮN: VẾT CHÂN TRUNG THÀNH</p>
                            <p class="release-year">2023</p>
                            <p class="my-2"><b>Vai trò:</b> Đạo diễn hình ảnh – Cung cấp bối cảnh & diễn viên</p>
                            <p> Bộ phim kể về hành trình cảm động của một chú chó từng bị bạo hành, nhưng vẫn luôn giữ sự trung thành và lòng vị tha. Sau khi được một cô gái đưa về nhà, chú tưởng mình đã tìm thấy hạnh phúc. Thế nhưng, những bất ổn trong gia đình mới khiến nó dần cảm thấy cô đơn, bị lạnh nhạt về mặt tinh thần. Khi cố gắng bảo vệ gia đình khỏi những cuộc cãi vã, chú lại bị xua đuổi. Cuối cùng, chú được một cô bé bán vé số cưu mang – người tuy không giàu có, nhưng trao cho nó sự yêu thương chân thành. </p>
                            <p>"Vết chân trung thành" là lời nhắc nhở nhẹ nhàng nhưng sâu sắc về tình yêu vô điều kiện của động vật, đồng thời lên án nạn bạo hành và sự vô trách nhiệm trong việc chăm sóc thú cưng.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden"
            >
                <div className="backdrop size-full">
                    <img
                        src="/portfolio/page_6/Picture1.png"
                        className="-z-1 w-1/3 absolute top-0 right-0 object-cover"
                        alt=""
                    />
                    <div className="content h-full w-full flex flex-col px-[5vw] py-[2vw] text-[#184deb]">
                        <p className="uppercase text-[#184deb] text-[2vw]">Trailer:</p>
                        <div className=" grow h-1/2 my-5">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F293747470001190%2F&show_text=false&appId"
                                className="aspect-video h-full mx-auto"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            />
                        </div>
                        <a href="https://www.facebook.com/share/v/15uXrNHQrR/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline mx-auto">
                            <p className="uppercase text-[#184deb] text-[1.3vw]">FULL PHIM NGẮN TẠI PAGE MCQ2O STUDIO TRÊN FACEBOOK </p>
                            <img src="/portfolio/page_6/Picture2.png" className="size-[4vw] relative top-3" alt="" />
                        </a>
                    </div>
                </div>
            </section>
            <section
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="backdrop size-full p-[2vw]">
                    <img src="/portfolio/page_7/Picture1.png" className="-z-1 w-1/3 absolute top-1/4 right-[78%] object-cover" alt="" />
                    <img src="/portfolio/page_7/Picture2.png" className="-z-1 w-1/3 absolute bottom-0 left-[77%]  object-cover" alt="" />

                    <div class="grid grid-cols-3 grid-rows-[auto_1fr_1fr] gap-y-[1.5vw] gap-x-[1.5vw]">

                        <div class="col-start-1 col-end-4 row-start-1 row-end-2 justify-self-stretch self-stretch">
                            <div className="flex flex-col text-[#184deb] text-[1.5vw]">
                                <p className="font-semibold">MV REMAKE: ALRIGHT CỦA THE FLOB</p>
                                <p className="leading-[1vw] text-[1vw]">2024</p>
                            </div>
                        </div>

                        <div class="col-start-1 col-end-2 row-start-2 row-end-3 rounded-2xl overflow-hidden">
                            <img src="/portfolio/page_7/gif2.gif" class="w-full h-full object-cover" alt="" />
                        </div>

                        <div class="col-start-2 col-end-3 row-start-2 row-end-3 rounded-2xl overflow-hidden">
                            <img src="/portfolio/page_7/gif3.gif" class="w-full h-full object-cover" alt="" />
                        </div>

                        <div class="col-start-3 col-end-4 row-start-2 row-end-3 rounded-2xl overflow-hidden">
                            <img src="/portfolio/page_7/gif4.gif" class="w-full h-full object-cover" alt="" />
                        </div>

                        <div class="col-start-1 col-end-3 row-start-3 row-end-4 text-[1.3vw] text-[#184deb] flex flex-col justify-between">
                            <p><b>Vai trò:</b> Đạo diễn, Biên kịch (kịch bản văn học, kịch bản phân cảnh), hỗ trợ diễn viên, giám sát sản xuất, hỗ trợ hậu kỳ.</p>
                            <p>MV kể câu chuyện cảm động về An – chàng trai không thể nguôi ngoai nỗi đau mất đi người yêu là Phong. Sau những ngày vùi đầu vào công việc, thuốc thang và trốn tránh thực tại, An dần bị những ký ức ngọt ngào xưa cũ kéo về, thôi thúc anh tìm lại Phong. Trong hành trình đó, An gặp lại hình ảnh, kỷ vật và cuối cùng là một khoảnh khắc kỳ diệu nơi bãi biển – nơi Phong từng rời xa. MV gửi gắm thông điệp: Dù những người thân yêu không còn bên ta, họ vẫn sống mãi trong ký ức và tình yêu để lại. Tất cả rồi sẽ ổn, khi ta học cách trân trọng những điều đã có và tiếp tục sống.</p>
                        </div>

                        <div class="col-start-3 col-end-4 row-start-3 row-end-4 rounded-2xl overflow-hidden">
                            <img src="/portfolio/page_7/gif1.gif" class="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="backdrop size-full p-[2vw]">

                    <div class="grid grid-cols-3 grid-rows-[auto_auto_1fr_1fr] gap-y-[3vw] gap-x-[1.5vw]">
                        <div class="col-start-1 col-end-4 row-start-1 row-end-2 justify-self-stretch self-stretch">
                            <div className="flex flex-col text-[#184deb] text-[1.5vw]">
                                <a href="https://www.facebook.com/share/v/17LMKJ6hUX/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                                    <p className="uppercase font-semibold text-[#184deb] text-[1.5vw]">FULL MV TẠI FACEBOOK NGUYỄN TRẦN NHÃ THANH</p>
                                    <img src="/portfolio/page_6/Picture2.png" className="size-[2vw] relative top-3" alt="" />
                                </a>
                            </div>
                        </div>

                        <div class="col-start-1 col-end-4 row-start-2 row-end-3 rounded-2xl overflow-hidden ">
                            <p className="text-[1.1vw] text-[#184deb]">MV đạt hơn 16.000 lượt xem và 160 lượt thích trên Facebook, cùng 1.800 lượt tiếp cận trên Instagram, tạo ra hiệu ứng tương tác tích cực và thu hút sự chú ý trong cộng đồng. Sản phẩm nhận được sự đánh giá cao từ giảng viên và được chọn vào vòng loại của sự kiện CINEMA DAY 2024: Buổi công chiếu video dự thi sinh viên. Dù không lọt vào danh sách tác phẩm xuất sắc, MV remake này vẫn tiếp tục được giảng viên lựa chọn để trình chiếu cho các khóa sinh viên sau.</p>
                        </div>

                        <div class="col-start-1 col-end-2 row-start-3 row-end-4 grid grid-rows-[1fr_auto] gap-[1vw]">
                            <img src="/portfolio/page_7/gif3.gif" class="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                            <p class="text-[1.3vw] text-[#184deb] font-semibold uppercase mx-auto">Opening</p>
                        </div>

                        <div class="col-start-2 col-end-3 row-start-3 row-end-4 grid grid-rows-[1fr_auto] gap-[1vw]">
                            <img src="/portfolio/page_7/gif4.gif" class="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                            <p class="text-[1.3vw] text-[#184deb] font-semibold uppercase mx-auto invisible">placeholder</p>
                        </div>

                        <div class="col-start-3 col-end-4 row-start-3 row-end-4 grid grid-rows-[1fr_auto] gap-[1vw]">
                            <img src="/portfolio/page_7/gif1.gif" class="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                            <p class="text-[1.3vw] text-[#184deb] font-semibold uppercase mx-auto">End</p>
                        </div>

                        <div class="col-start-1 col-end-4 row-start-4 row-end-5 grid">
                            <img src="/portfolio/page_8/Picture1.png" className="-z-1 w-full bottom-0 left-0 absolute object-cover" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="backdrop size-full p-[2vw]">
                    <img src="/portfolio/page_8/Picture4.png" className="-z-1 w-2/5 absolute bottom-1/9 left-[50%] object-cover" alt="" />
                    <img src="/portfolio/page_8/Picture3.png" className="-z-1 w-1/2 absolute bottom-0 right-[50%] object-cover" alt="" />

                    <div className="grid grid-cols-3 grid-rows-[auto_auto_1fr] gap-[3vw] gap-y-[3vw]">

                        <div className="col-start-1 col-end-4 row-start-1 row-end-2 justify-self-stretch self-stretch">
                            <div className="flex flex-col text-[#184deb] text-[2vw]">
                                <p className="uppercase font-semibold text-[#184deb] text-[1.5vw]">
                                    BEHIND THE SCENES-MV REMAKE: ALRIGHT BY THE FLOB
                                </p>
                            </div>
                        </div>

                        <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                            <img src="/portfolio/page_7/gif3.gif" className="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                        </div>

                        <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                            <img src="/portfolio/page_7/gif3.gif" className="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                        </div>

                        <div className="col-start-3 col-end-4 row-start-2 row-end-3">
                            <img src="/portfolio/page_7/gif3.gif" className="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                        </div>

                        <div className="col-start-1 col-end-2 row-start-3 row-end-4">
                            <img src="/portfolio/page_7/gif4.gif" className="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                        </div>

                        <div className="col-start-2 col-end-3 row-start-3 row-end-4">
                            <img src="/portfolio/page_7/gif4.gif" className="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                        </div>

                        <div className="col-start-3 col-end-4 row-start-3 row-end-4">
                            <img src="/portfolio/page_7/gif1.gif" className="w-full h-full object-cover rounded-2xl overflow-hidden" alt="" />
                        </div>

                    </div>

                </div>
            </section>
            <section
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="backdrop size-full p-[2vw]">
                    <img src="/portfolio/page_8/Picture4.png" className="-z-1 w-2/5 absolute top-1/12 left-[40%] object-cover" alt="" />
                    <img src="/portfolio/page_8/Picture3.png" className="-z-1 w-1/4 absolute rotate-12 top-1/9  right-[0] object-cover" alt="" />


                    <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-[3vw] gap-y-[1vw] h-full">

                        <div className="row-start-1 row-end-2 justify-self-stretch self-stretch">
                            <div className="flex flex-col text-[#184deb] text-[2vw]">
                                <p className=" font-semibold text-[#184deb] text-[2vw]">
                                    Đồ án thiết kế cho học phần Thiết kế đồ họa nâng cao
                                </p>
                                <p className=" text-[#184deb] text-[1.3vw] w-1/2">
                                    Xây dựng một thương hiệu giả định và thiết kế trọn bộ ấn phẩm nhận diện, bao gồm: logo, standee, name card, brochure, tiêu đề thư, phong bì, tờ rơi và bìa đựng hồ sơ sinh viên.
                                </p>
                            </div>
                        </div>

                        <div className="row-start-2 row-end-3 overflow-y-scroll scrollable overflow-x-hidden h-full relative">

                            <div class="grid h-full grid-cols-2 md:grid-cols-4 gap-4">
                                <div class="flex flex-col gap-4 h-full">
                                    <div className="border border-green-800">
                                        <ImageViewer class="h-auto max-w-full rounded-lg block " src="/portfolio/page_9/Picture1.png" alt="" />
                                    </div>
                                    <div className="border border-green-800">
                                        <ImageViewer class="h-auto max-w-full rounded-lg block" src="/portfolio/page_9/Picture5.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg block" src="/portfolio/page_9/Picture9.png" alt="" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 h-full">
                                    <div >
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_9/Picture2.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_9/Picture6.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_9/Picture3.png" alt="" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 h-full">
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_9/Picture8.png" alt="" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 h-full">
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_9/Picture4.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_9/Picture7.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_9/Picture10.png" alt="" />
                                    </div>
                                    <p className="text-[#184deb] text-[1.3vw]">Thiết kế bằng Adobe Illustrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`h-screen min-h-screen flex w-full snap-center snap-always relative overflow-hidden`}
            >
                <div className="backdrop size-full p-[2vw]">
                    <img src="/portfolio/page_10/Picture11.png" className="-z-1 w-2/5 absolute top-1/12 right-[65%] object-cover" alt="" />
                    <img src="/portfolio/page_10/Picture12.png" className="-z-1 w-2/5 absolute  top-0  right-[0] object-cover" alt="" />
                    <img src="/portfolio/page_10/Picture13.png" className="-z-1 w-1/4 absolute bottom-0  right-[0] object-cover" alt="" />


                    <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-[3vw] gap-y-[1vw] h-full">

                        <div className="row-start-1 row-end-2 justify-self-stretch self-stretch">
                            <div className="flex flex-col text-[#184deb] text-[2vw]">
                                <p className=" font-semibold text-[#184deb] text-[2vw]">
                                    MOCK-UP
                                </p>
                            </div>
                        </div>

                        <div className="row-start-2 row-end-3 scrollable overflow-y-scroll overflow-x-hidden h-full relative">

                            <div class="grid h-full grid-cols-2 md:grid-cols-4 gap-4">
                                <div class="flex flex-col gap-4 h-full">
                                    <div className="">
                                        <ImageViewer class="h-auto max-w-full rounded-lg block " src="/portfolio/page_10/Picture1.png" alt="" />
                                    </div>
                                    <div className="">
                                        <ImageViewer class="h-auto max-w-full rounded-lg block" src="/portfolio/page_10/Picture5.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg block" src="/portfolio/page_10/Picture9.png" alt="" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 h-full">
                                    <div >
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_10/Picture2.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_10/Picture8.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_10/Picture3.png" alt="" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 h-full">
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_10/Picture6.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_10/Picture7.png" alt="" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 h-full">
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_10/Picture4.png" alt="" />
                                    </div>
                                    <div>
                                        <ImageViewer class="h-auto max-w-full rounded-lg" src="/portfolio/page_10/Picture10.png" alt="" />
                                    </div>
                                    <p className="text-[#184deb] text-[1.3vw]">Thiết kế bằng Adobe Illustrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default PortfolioPage;
