import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar"
import { ImArrowUp2 } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { nanoid } from "nanoid";
import ScrollToTop from "../Components/scrollTop";



const Gallery = () => {

    const [showUp, setShowUp] = useState(false)

    const videoRef = useRef();

    const slideRef = useRef();

    const navRef = useRef();

    const navRef2 = useRef();

    const [videoIndex, setVideoIndex] = useState('onboarding');

    const baseUrl = window.location.origin;

    const videosData = {
      onboarding: [`/videos/gallery_video2.mp4`],
      funToWatch: [
        `/videos/gallery_video3.mp4`,`/videos/gallery_video4.mp4`,
        `/videos/gallery_video5.mp4`,
        `/videos/gallery_video6.mp4`
      ],
    };

    const navData = [
      {
        title: "Onboarding",
        dataIndex: "onboarding",
        description:
          "Explore our quick onboarding videos covering setup, tips for success, troubleshooting, and next steps to get started smoothly.",
      },
      {
        title: "Fun to Watch",
        dataIndex: "funToWatch",
        description:
          "Dive into our entertaining videos for a fun glimpse into our company culture, products, and services. Let's enjoy the ride together!",
      },
    ];

    useEffect(() => {

        const handleScroll = () => {
            setShowUp(window.scrollY > 90 || window.pageYOffset > 90)
        }

        window.addEventListener('scroll', handleScroll)


        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const slideChange = (swipeSlide) => {

        document?.querySelectorAll('.slideref')?.forEach(e => e.pause())

        switch (swipeSlide.activeIndex) {
            case 0:
                setVideoIndex('onboarding')
                break;
            case 1:
                setVideoIndex('funToWatch')
                break;
            default:
                setVideoIndex('onboarding')
        }

        // videoRef?.current?.swiper.slideTo(0)
        videoRef?.current?.swiper.update()

    }

    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className="min-h-[calc(100vh-85px)] relative top-[85px] flex items-center smm:flex-col w-full justify-between bg-[#e4e4e4c1]">
                
                <div className="h-[300px] hidden smm:block w-full mb-2 bg-white">
                    <Swiper
                        freeMode={true}
                        slidesPerView={1}
                        keyboard={true}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            550: {
                                slidesPerView: 2,
                                pagination: false
                            },
                            850: {
                                slidesPerView: 3,
                                pagination: false
                            },
                        
                        }}
                        centeredSlides={true}
                        modules={[Keyboard, Pagination]}
                        onSlideChange={slideChange}
                        ref={navRef}
                        className="vertical-slider">

                        {navData.map((e, i) => <SwiperSlide key={i} className="cursor-pointer" onClick={() => {
                            navRef?.current?.swiper.slideTo(i)
                        }}>
                            <div className="w-full px-6">
                                <h2 className="font-bold text-left font-grifter text-[30px] after:content-[''] after:absolute after:w-[100px] after:h-[5px] after:rounded-[6rem] relative after:bottom-0 after:left-0 after:bg-[#4B5DFF] text-[#7482FF] mb-2">{e.title}</h2>

                                <span className="text-[#5d5d5d] font-aeonikregular text-[14px] text-left">
                                   {e.description}
                                </span>
                            </div>
                        </SwiperSlide>)}
                        
                    </Swiper>
                </div>

                <div className="h-[calc(100vh-85px)] min-w-[350px] smm:hidden max-w-[500px] w-full  mr-2 bg-white">
                    <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    freeMode={true}
                    slidesPerView={3}
                    mousewheel={true}
                    keyboard={true}
                    centeredSlides={true}
                    modules={[Pagination, Mousewheel, Keyboard]}
                    onSlideChange={slideChange}
                    ref={navRef2}
                    className="vertical-slider">
                    {navData.map((e, i) => <SwiperSlide key={i} className="cursor-pointer" onClick={() => {
                            navRef2?.current?.swiper.slideTo(i)
                        }}>
                       <div className="w-full px-6">
                                <h2 className="font-bold text-left font-grifter text-[30px] after:content-[''] after:absolute after:w-[100px] after:h-[5px] after:rounded-[6rem] relative after:bottom-0 after:left-0 after:bg-[#4B5DFF] text-[#7482FF] mb-2">{e.title}</h2>
                            
                                <span className="text-[#5d5d5d] font-aeonikregular text-[14px] text-left">
                                    {e.description}
                                </span>
                        </div> 
                    </SwiperSlide>)}
                </Swiper>
                </div>

                <div className="w-[calc(100%-400px)] smm:w-full relative px-6 bg-white min-h-[calc(100vh-85px)] videoview smm:min-h-fit">
                    <Swiper
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.next',
                            prevEl: '.prev'
                        }}
                        observer={true}
                        observeslidechildren={true}
                        keyboard={true}
                        modules={[Navigation, Keyboard]}
                        ref={videoRef}
                        className="videoview-slider"
                        onSlideChange={() => {
                            document?.querySelectorAll('.slideref')?.forEach(e => e.pause())
                        }}
                    >
                        {videosData[videoIndex]?.map((e, i) => <SwiperSlide key={nanoid()} className="relative h-fit">
                            <video ref={slideRef} controls className="w-full slideref bg-black h-[calc(100vh-85px)]">
                                <source src={`${baseUrl}${e}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </SwiperSlide>)}
                    </Swiper>
                    <div className="absolute z-40 w-[calc(100%-60px)] left-0 right-0 top-0 bottom-0 m-auto flex justify-between h-fit items-center">
                        <div className="bg-white p-[2px] swiper-nav cursor-pointer prev rounded-[50%]">
                        <IoArrowBackCircleOutline className="h-[43px] w-[43px]" style={{

                        }}/></div>

                        <div className="bg-white p-[2px] next cursor-pointer swiper-nav rounded-[50%]"><IoArrowForwardCircleOutline className="h-[43px]  w-[43px]" /></div>
                    </div>
                </div>
            </div>

            {showUp && <div data-aos-duration="500" data-aos="zoom-in-down" onClick={() => window.scrollTo(0, 0)} className="moveup flex rounded-[50%] bg-[#4B5DFF] items-center justify-center fixed h-[60px] z-50 w-[60px] bottom-[95px] cursor-pointer right-[24px]">
                <ImArrowUp2 className="text-[#fff] text-[28px] h-[28px] w-[28px]"/>
            </div>}
        </>
    )
}

export default Gallery;