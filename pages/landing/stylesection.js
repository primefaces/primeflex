import Link from 'next/link';
import { classNames } from 'primereact/utils';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const StyleSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const wrapperRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [animationEnabled, setAnimationEnabled] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const codes = useMemo(() => {
        return {
            glass: `<div class="p-2 border-round-xl" style="background: var(--style-cards-bg); backgroundBlendMode: normal, color-dodge; width: 300px;">
        <div class="content p-2 h-full relative bg-cover bg-no-repeat bg-center border-round-xl shadow-1 flex flex-column justify-content-end" style="background: url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/glassmorphic-bg.jpeg"); backgroundBlendMode: color-dodge, normal, normal; minHeight: 385px;">
            <div class="content-image absolute top-0 right-0">
                <div class="rating mt-2 border-round-sm mr-2 p-2 flex align-items-center gap-2 bg-white-alpha-20 w-8rem border-1" style="backdropFilter: blur(27px); borderColor: rgba(255, 255, 255, 0.2);">
                    <i class="pi pi-star-fill text-white"></i>
                    <i class="pi pi-star-fill text-white"></i>
                    <i class="pi pi-star-fill text-white"></i>
                    <i class="pi pi-star-fill text-white-alpha-50"></i>
                    <i class="pi pi-star-fill text-white-alpha-50"></i>
                </div>
            </div>
            <div class="content-info mt-2 border-round-sm bg-white-alpha-20 border-1 border-round-lg" style="backdropFilter: blur(27px); borderColor: rgba(255, 255, 255, 0.2);">
                <div class="flex align-items-center justify-content-between py-2 px-3 border-bottom-1" style="borderColor: rgba(255, 255, 255, 0.2);">
                    <span class="font-medium text-white">Prime Coffee Shop</span>
                    <i class="pi pi-verified text-white"></i>
                </div>
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2 border-bottom-1" style="borderColor: rgba(255, 255, 255, 0.2);">
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Cold Brew</span>
                    </div>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill text-white"></i>
                        <span class="font-small text-white white-space-nowrap">10:00 - 17:00</span>
                    </div>
                </div>
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2">
                    <div class="flex align-items-center justify-content-center gap-1 border-right-1 pr-2" style="borderColor: rgba(255, 255, 255, 0.2);">
                        <i class="pi pi-bolt text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Charge</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 border-right-1 px-2" style="borderColor: rgba(255, 255, 255, 0.2);">
                        <i class="pi pi-wifi text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Wifi</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 pl-2">
                        <i class="pi pi-book text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Library</span>
                    </div>
                </div>
            </div>
            <div class="flex align-items-center justify-content-center pt-2 gap-2">
                <button class="p-3 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-1 cursor-pointer hover:bg-white-alpha-20 transition-duration-200" style="backdropFilter: blur(27px); borderColor: rgba(255, 255, 255, 0.2);">
                    <span class="font-medium text-white white-space-nowrap">Contact</span>
                    <i class="pi pi-send text-white"></i>
                </button>
                <button class="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
                    <span class="font-medium text-white white-space-nowrap">Rate</span>
                    <i class="pi pi-thumbs-up-fill text-white"></i>
                </button>
            </div>
        </div>
    </div>`,

            fancy: `<div class="p-2 border-round-xl" style="background: var(--style-cards-fancy-bg); border: 1px solid rgba(255, 255, 255, 0.1); backgroundBlendMode: normal, color-dodge; width: 300px;">
        <div class="content border-round-sm">
            <div class="content-image bg-cover bg-no-repeat bg-center relative" style="height: 244px; background-image: url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/fancy.jpg")">
                <div class="rating mt-2 border-round-sm absolute ml-2 p-2 flex align-items-center gap-2 bg-black-alpha-20 w-8rem border-1" style="backdropFilter: blur(27px);">
                    <i class="pi pi-star-fill text-white"></i>
                    <i class="pi pi-star-fill text-white"></i>
                    <i class="pi pi-star-fill text-white"></i>
                    <i class="pi pi-star-fill text-gray-600"></i>
                    <i class="pi pi-star-fill text-gray-600"></i>
                </div>
            </div>
            <div class="content-info mt-2 border-round-sm bg-white-alpha-10 shadow-1 py-1" style="backdropFilter: blur(27px);">
                <div class="flex align-items-center justify-content-between py-2 px-3">
                    <span class="font-medium text-white">Prime Coffee Shop</span>
                    <i class="pi pi-verified text-white"></i>
                </div>
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2">
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Cold Brew</span>
                    </div>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill text-white"></i>
                        <span class="font-small text-white white-space-nowrap">10:00 - 17:00</span>
                    </div>
                </div>
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2">
                    <div class="flex align-items-center justify-content-center gap-1 border-right-1 surface-border pr-2">
                        <i class="pi pi-bolt text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Charge</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 border-right-1 surface-border px-2">
                        <i class="pi pi-wifi text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Wifi</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 pl-2">
                        <i class="pi pi-book text-white"></i>
                        <span class="font-small text-white white-space-nowrap">Library</span>
                    </div>
                </div>
            </div>
            <div class="flex align-items-center justify-content-center pt-2 gap-2">
                <button class="p-3 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-none cursor-pointer hover:bg-white-alpha-20 transition-duration-200" style="backdropFilter: blur(27px);">
                    <span class="font-medium text-white white-space-nowrap">Contact</span>
                    <i class="pi pi-send text-white"></i>
                </button>
                <button class="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
                    <span class="font-medium text-white white-space-nowrap">Rate</span>
                    <i class="pi pi-thumbs-up-fill text-white"></i>
                </button>
            </div>
        </div>
    </div>`,

            basic: `<div class="p-2 border-round-xl" style="background: var(--style-cards-bg); border: 1px solid rgba(255, 255, 255, 0.1); backgroundBlendMode: normal, color-dodge; width: 300px;">
        <div class="content bg-white p-2">
            <div class="content-image bg-cover bg-no-repeat bg-center relative" style="height: 247px; background-image: url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/basic.jpg")">
                <div class="rating mt-2 absolute ml-2 p-2 bg-white flex align-items-center gap-2 opacity-90 w-8rem ">
                    <i class="pi pi-star-fill text-gray-900"></i>
                    <i class="pi pi-star-fill text-gray-900"></i>
                    <i class="pi pi-star-fill text-gray-900 "></i>
                    <i class="pi pi-star-fill text-gray-600"></i>
                    <i class="pi pi-star-fill text-gray-600"></i>
                </div>
            </div>
            <div class="content-info pt-1">
                <div class="flex align-items-center justify-content-between py-2 px-3">
                    <span class="font-medium text-gray-900">Prime Coffee Shop</span>
                    <i class="pi pi-verified text-gray-900"></i>
                </div>
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2">
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill "></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Cold Brew</span>
                    </div>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill "></i>
                        <span class="font-small text-gray-900 white-space-nowrap">10:00 - 17:00</span>
                    </div>
                </div>
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2">
                    <div class="flex align-items-center justify-content-center gap-1 border-right-1 surface-border pr-2">
                        <i class="pi pi-bolt "></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Charge</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 border-right-1 surface-border px-2">
                        <i class="pi pi-wifi "></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Wifi</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 pl-2">
                        <i class="pi pi-book "></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Library</span>
                    </div>
                </div>
                <div class="flex align-items-center justify-content-center pt-2 px-3 gap-2">
                    <button class="p-3 flex align-items-center justify-content-center w-7 gap-2 bg-black-alpha-10 shadow-1 border-none cursor-pointer hover:bg-black-alpha-20 transition-duration-200">
                        <span class="font-medium text-gray-900 white-space-nowrap">Contact</span>
                        <i class="pi pi-send text-gray-900"></i>
                    </button>
                    <button class="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200">
                        <span class="font-medium text-white white-space-nowrap">Rate</span>
                        <i class="pi pi-thumbs-up-fill text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`,

            modern: `<div class="p-2 border-round-xl" style="background: var(--style-cards-bg); border: 1px solid rgba(255, 255, 255, 0.1); backgroundBlendMode: normal, color-dodge; width: 300px;">
        <div class="content bg-white h-full p-2">
            <div class="flex align-items-center gap-2 py-2 px-3">
                <i class="pi pi-verified text-gray-900"></i>
                <span class="font-medium text-gray-900">Prime Coffee Shop</span>
            </div>
            <div class="mt-3 content-image-wrapper relative text-center w-full flex align-items-center justify-content-center">
                <div class="content-image bg-cover bg-no-repeat bg-center h-14rem w-7rem z-4" style="background-image: url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/modern.jpg"); border-radius: 70px;"></div>
                <span class="block absolute w-11rem h-5rem bg-orange-300 z-3 origin-top-center -rotate-45"></span>
                <span class="block absolute w-11rem h-5rem bg-orange-300 z-2 origin-bottom-center rotate-45"></span>
            </div>
            <div class="rating mt-2 mb-2 flex align-items-center justify-content-center gap-2 w-full ">
                <i class="pi pi-star-fill text-gray-900"></i>
                <i class="pi pi-star-fill text-gray-900"></i>
                <i class="pi pi-star-fill text-gray-900"></i>
                <i class="pi pi-star-fill text-gray-600"></i>
                <i class="pi pi-star-fill text-gray-600"></i>
            </div>
            <div class="content-info">
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2">
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill"></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Cold Brew</span>
                    </div>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-star-fill"></i>
                        <span class="font-small text-gray-900 white-space-nowrap">10:00 - 17:00</span>
                    </div>
                </div>
                <div class="flex align-items-center justify-content-between py-2 px-3 gap-2">
                    <div class="flex align-items-center justify-content-center gap-1 border-right-1 surface-border pr-2">
                        <i class="pi pi-bolt"></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Charge</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 border-right-1 surface-border px-2">
                        <i class="pi pi-wifi"></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Wifi</span>
                    </div>
                    <div class="flex align-items-center gap-1 justify-content-center gap-1 pl-2">
                        <i class="pi pi-book"></i>
                        <span class="font-small text-gray-900 white-space-nowrap">Library</span>
                    </div>
                </div>
                <div class="flex align-items-center justify-content-center pt-2 px-3 gap-2">
                    <button class="p-3 flex align-items-center justify-content-center w-7 gap-2 bg-white border-1 shadow-1 cursor-pointer hover:bg-black-alpha-10 transition-duration-200" style="border-radius: 50px;">
                        <span class="font-medium text-gray-900 white-space-nowrap">Contact</span>
                        <i class="pi pi-send text-gray-900"></i>
                    </button>
                    <button class="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200" style="border-radius: 50px;">
                        <span class="font-medium text-white white-space-nowrap">Rate</span>
                        <i class="pi pi-thumbs-up-fill text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`
        };
    }, []);
    const [code, setCode] = useState(codes.glass);

    const handleSlideClick = useCallback(
        (slideIndex) => {
            setFadeIn(true);
            setActiveSlide(slideIndex);
            const slideCodes = [codes.glass, codes.fancy, codes.modern, codes.basic];

            setCode(slideCodes[slideIndex]);

            if (window.innerWidth <= 991) {
                const wrapper = document.querySelector('.landing-style-cards-header');
                const activeTab = document.querySelector(`.slide-${slideIndex + 1}`);

                if (wrapper && activeTab) {
                    wrapper.scrollLeft = activeTab.offsetLeft - wrapper.offsetWidth / 2 + activeTab.offsetWidth / 2;
                }
            }
        },
        [codes]
    );

    function Slide(props) {
        const slideRef = useRef(null);

        const handleClick = useCallback(() => {
            props.onClick(props.slideIndex);
        }, [props]);

        useEffect(() => {
            if (slideRef.current) {
                if (props.slideIndex === activeSlide) {
                    slideRef.current.style.zIndex = 1;
                    slideRef.current.classList.remove('inactive');
                    slideRef.current.classList.add('active');

                    if (fadeIn) {
                        slideRef.current.classList.add('fadein');
                        setTimeout(() => {
                            setFadeIn(false);
                        }, 1000); // replace 1000 with the duration of your animation
                    }
                } else {
                    slideRef.current.style.zIndex = 0;
                    slideRef.current.classList.remove('active', 'fadein');
                    slideRef.current.classList.add('inactive');
                }
            }
        }, [props.slideIndex]);

        return (
            <div ref={slideRef} onClick={handleClick} className="slide animation-duration-1000 animation-iteration-1">
                {props.children}
            </div>
        );
    }

    function CustomCodeHighlight(props) {
        const codeElement = useRef();
        const languageClassName = `language-${props.lang || 'jsx'}`;

        useEffect(() => {
            if (codeElement.current) {
                codeElement.current.innerHTML = window.Prism.highlight(props.children, window.Prism.languages[props.lang || 'jsx'], props.lang || 'jsx');
            }
        }, [props.children, props.lang]);

        return (
            <pre style={props.style}>
                <code ref={codeElement} className={classNames(languageClassName, { 'pt-5': !props.import })} dangerouslySetInnerHTML={{ __html: '&nbsp;' }}></code>
            </pre>
        );
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovering) {
                handleSlideClick((activeSlide + 1) % 4);

                if (window.innerWidth <= 991) {
                    const wrapper = document.querySelector('.landing-style-cards-header');
                    const activeTab = document.querySelector(`.slide-${((activeSlide + 1) % 4) + 1}`);

                    if (wrapper && activeTab) {
                        wrapper.scrollLeft = activeTab.offsetLeft - wrapper.offsetWidth / 2 + activeTab.offsetWidth / 2;
                    }
                }
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [activeSlide, handleSlideClick, isHovering]);

    function handleSliderButtonClick(isNext) {
        let nextSlide;

        if (isNext) {
            nextSlide = (activeSlide + 1) % 4;
        } else {
            nextSlide = (activeSlide + 3) % 4;
        }

        setFadeIn(true);
        handleSlideClick(nextSlide);

        const slides = wrapperRef.current.getElementsByClassName('slide');

        for (let slide of slides) {
            if (parseInt(slide.getAttribute('slideIndex')) === nextSlide) {
                slide.classList.add('fadein');
            } else {
                slide.classList.remove('fadein');
            }
        }

        setTimeout(() => {
            slides[nextSlide].classList.remove('fadein');
        }, 1000);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991) {
                const wrapper = document.querySelector('.landing-style-cards-header');
                const activeTab = document.querySelector('.slide-tab-active');

                if (wrapper && activeTab) {
                    wrapper.scrollLeft = activeTab.offsetLeft - wrapper.offsetWidth / 2 + activeTab.offsetWidth / 2;
                }
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="landing-style-section relative landing-section-border">
            <div className="landing-style-container pt-7 pb-8 px-5 relative z-5">
                <div className="landing-style-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    <h1 className="landing-title font-bold m-0 text-7xl">Create Your Style</h1>
                    <h3 className="landing-subtitle m-0 text-2xl font-normal text-center">Craft unique aesthetics with PrimeFlex's classes. Use our flexible toolkit to make your design vision a reality, embodying your brand's distinct style.</h3>

                    <Link href="/installation" className="linkbox-button active w-9rem fadeinleft animation-duration-2000 animation-ease-out ">
                        Learn more
                    </Link>
                </div>
                <div ref={wrapperRef} className="landing-style-cards-wrapper mt-5">
                    <div className="landing-style-cards-header flex">
                        <div className={`slide-1 slide-tab ${activeSlide === 0 ? 'slide-tab-active' : ''} ${isHovering ? 'pause-animation' : ''}`} onClick={() => handleSlideClick(0)}>
                            <span>Glassmorphic</span>
                        </div>
                        <div className={`slide-2 slide-tab ${activeSlide === 1 ? 'slide-tab-active' : ''} ${isHovering ? 'pause-animation' : ''}`} onClick={() => handleSlideClick(1)}>
                            <span>Fancy</span>
                        </div>
                        <div className={`slide-3 slide-tab ${activeSlide === 2 ? 'slide-tab-active' : ''} ${isHovering ? 'pause-animation' : ''}`} onClick={() => handleSlideClick(2)}>
                            <span>Modern</span>
                        </div>
                        <div className={`slide-4 slide-tab ${activeSlide === 3 ? 'slide-tab-active' : ''} ${isHovering ? 'pause-animation' : ''}`} onClick={() => handleSlideClick(3)}>
                            <span>Basic</span>
                        </div>
                    </div>
                    <div
                        className="landing-style-cards-container flex flex-wrap align-items-center justify-content-between"
                        onMouseEnter={() => {
                            setIsHovering(true);
                            setAnimationEnabled(false);
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false);
                        }}
                    >
                        <div id="slider-wrapp" className="slider-wrapp">
                            <div className="slider-buttons">
                                <button className="slider-button h-2rem w-2rem flex cursor-pointer   justify-content-center p-0 m-0 align-items-center" onClick={() => handleSliderButtonClick(false)}>
                                    <i className="pi pi-chevron-left"></i>
                                </button>
                                <button className="slider-button h-2rem w-2rem flex  cursor-pointer   justify-content-center p-0 m-0 align-items-center" onClick={() => handleSliderButtonClick(true)}>
                                    <i className="pi pi-chevron-right"></i>
                                </button>
                            </div>
                            <div id="slider" className="slider">
                                <Slide key={`slide-0-${activeSlide}`} slideIndex={0} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div
                                        className="p-2 border-round-xl"
                                        style={{
                                            background: 'var(--style-cards-bg)',
                                            backgroundBlendMode: 'normal, color-dodge',
                                            width: '300px'
                                        }}
                                    >
                                        <div
                                            className="content p-2 h-full relative bg-cover bg-no-repeat bg-center border-round-xl shadow-1 flex flex-column justify-content-end"
                                            style={{ background: 'url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/glassmorphic-bg.jpeg")', backgroundBlendMode: 'color-dodge, normal, normal', minHeight: '420px' }}
                                        >
                                            <div className="content-image  absolute top-0  right-0">
                                                <div className="rating mt-2 border-round-sm mr-2 p-2 flex align-items-center gap-2 bg-white-alpha-20 w-8rem border-1 " style={{ backdropFilter: 'blur(27px)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                    <i className="pi pi-star-fill text-white"></i>
                                                    <i className="pi pi-star-fill text-white"></i>
                                                    <i className="pi pi-star-fill text-white "></i>
                                                    <i className="pi pi-star-fill text-white-alpha-50"></i>
                                                    <i className="pi pi-star-fill text-white-alpha-50"></i>
                                                </div>
                                            </div>
                                            <div className="content-info mt-2 border-round-sm bg-white-alpha-20  border-1 border-round-lg" style={{ backdropFilter: 'blur(27px)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                <div className="flex align-items-center justify-content-between py-2 px-3 border-bottom-1 " style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                    <span className="font-medium text-white">Prime Coffee Shop</span>
                                                    <i className="pi pi-verified text-white"></i>
                                                </div>
                                                <div className="flex align-items-center justify-content-between py-2 px-3 gap-2  border-bottom-1 " style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Cold Brew</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">10:00 - 17:00</span>
                                                    </div>
                                                </div>
                                                <div className="flex align-items-center justify-content-between py-2 px-3 gap-2">
                                                    <div className="flex align-items-center justify-content-center gap-1 border-right-1  pr-2" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                        <i className="pi pi-bolt text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Charge</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 border-right-1  px-2" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                                        <i className="pi pi-wifi text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Wifi</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 pl-2">
                                                        <i className="pi pi-book text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Library</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex align-items-center justify-content-center pt-2  gap-2">
                                                <button
                                                    className="p-3 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-1 cursor-pointer hover:bg-white-alpha-20
transition-duration-200"
                                                    style={{ backdropFilter: 'blur(27px)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                                                >
                                                    <span className="font-medium text-white white-space-nowrap">Contact</span>
                                                    <i className="pi pi-send text-white"></i>
                                                </button>
                                                <button className="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
                                                    <span className="font-medium text-white white-space-nowrap">Rate</span>
                                                    <i className="pi pi-thumbs-up-fill text-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide key={`slide-1-${activeSlide}`} slideIndex={1} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div
                                        className="p-2 border-round-xl"
                                        style={{
                                            background: 'var(--style-cards-fancy-bg)',
                                            border: ' 1px solid rgba(255, 255, 255, 0.1)',
                                            backgroundBlendMode: 'normal, color-dodge',
                                            width: '300px'
                                        }}
                                    >
                                        <div className="content border-round-sm">
                                            <div className="content-image bg-cover bg-no-repeat bg-center relative" style={{ height: ' 244px', backgroundImage: 'url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/fancy.jpg")' }}>
                                                <div className="rating mt-2 border-round-sm absolute ml-2 p-2 flex align-items-center gap-2 bg-black-alpha-20 w-8rem border-1" style={{ backdropFilter: 'blur(27px)' }}>
                                                    <i className="pi pi-star-fill text-white"></i>
                                                    <i className="pi pi-star-fill text-white"></i>
                                                    <i className="pi pi-star-fill text-white "></i>
                                                    <i className="pi pi-star-fill text-gray-600"></i>
                                                    <i className="pi pi-star-fill text-gray-600"></i>
                                                </div>
                                            </div>
                                            <div className="content-info mt-2 border-round-sm bg-white-alpha-10 shadow-1 py-1" style={{ backdropFilter: 'blur(27px)' }}>
                                                <div className="flex align-items-center justify-content-between py-2 px-3">
                                                    <span className="font-medium text-white">Prime Coffee Shop</span>
                                                    <i className="pi pi-verified text-white"></i>
                                                </div>
                                                <div className="flex align-items-center justify-content-between py-2 px-3 gap-2">
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Cold Brew</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">10:00 - 17:00</span>
                                                    </div>
                                                </div>
                                                <div className="flex align-items-center justify-content-between py-2 px-3 gap-2">
                                                    <div className="flex align-items-center justify-content-center gap-1 border-right-1 surface-border pr-2">
                                                        <i className="pi pi-bolt text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Charge</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 border-right-1 surface-border px-2">
                                                        <i className="pi pi-wifi text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Wifi</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 pl-2">
                                                        <i className="pi pi-book text-white"></i>
                                                        <span className="font-small text-white white-space-nowrap">Library</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex align-items-center justify-content-center pt-2  gap-2">
                                                <button
                                                    className="p-3 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-none cursor-pointer hover:bg-white-alpha-20
transition-duration-200"
                                                    style={{ backdropFilter: 'blur(27px)' }}
                                                >
                                                    <span className="font-medium text-white white-space-nowrap">Contact</span>
                                                    <i className="pi pi-send text-white"></i>
                                                </button>
                                                <button className="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
                                                    <span className="font-medium text-white white-space-nowrap">Rate</span>
                                                    <i className="pi pi-thumbs-up-fill text-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide key={`slide-2-${activeSlide}`} slideIndex={2} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div
                                        className="p-2 border-round-xl"
                                        style={{
                                            background: 'var(--style-cards-bg)',
                                            border: ' 1px solid rgba(255, 255, 255, 0.1)',
                                            backgroundBlendMode: 'normal, color-dodge',
                                            width: '300px'
                                        }}
                                    >
                                        <div className="content bg-white h-full p-2">
                                            <div className="flex align-items-center gap-2 py-2 px-3">
                                                <i className="pi pi-verified text-gray-900"></i>
                                                <span className="font-medium text-gray-900">Prime Coffee Shop</span>
                                            </div>
                                            <div className="mt-3 content-image-wrapper relative text-center w-full flex align-items-center justify-content-center">
                                                <div
                                                    className="content-image bg-cover bg-no-repeat bg-center h-12rem w-6rem z-4"
                                                    style={{ backgroundImage: 'url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/modern.jpg")', borderRadius: '70px' }}
                                                ></div>
                                                <span className="block absolute w-11rem h-5rem bg-orange-300 z-3 origin-top-center -rotate-45"></span>
                                                <span className="block absolute w-11rem h-5rem bg-orange-300 z-2 origin-bottom-center rotate-45"></span>
                                            </div>
                                            <div className="rating mt-2 mb-2 flex align-items-center justify-content-center gap-2 w-full ">
                                                <i className="pi pi-star-fill text-gray-900"></i>
                                                <i className="pi pi-star-fill text-gray-900"></i>
                                                <i className="pi pi-star-fill text-gray-900 "></i>
                                                <i className="pi pi-star-fill text-gray-600"></i>
                                                <i className="pi pi-star-fill text-gray-600"></i>
                                            </div>
                                            <div className="content-info">
                                                <div className="flex align-items-center justify-content-between py-2 px-3 gap-2">
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Cold Brew</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">10:00 - 17:00</span>
                                                    </div>
                                                </div>
                                                <div className="flex align-items-center justify-content-between py-2 px-3 gap-2">
                                                    <div className="flex align-items-center justify-content-center gap-1 border-right-1 surface-border pr-2">
                                                        <i className="pi pi-bolt "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Charge</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 border-right-1 surface-border px-2">
                                                        <i className="pi pi-wifi "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Wifi</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 pl-2">
                                                        <i className="pi pi-book "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Library</span>
                                                    </div>
                                                </div>
                                                <div className="flex align-items-center justify-content-center pt-2 px-3 gap-2">
                                                    <button
                                                        className="p-3 flex align-items-center justify-content-center w-7 gap-2 bg-white border-1 shadow-1 cursor-pointer hover:bg-black-alpha-10 transition-duration-200"
                                                        style={{ borderRadius: '50px' }}
                                                    >
                                                        <span className="font-medium text-gray-900 white-space-nowrap">Contact</span>
                                                        <i className="pi pi-send text-gray-900"></i>
                                                    </button>
                                                    <button
                                                        className="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200"
                                                        style={{ borderRadius: '50px' }}
                                                    >
                                                        <span className="font-medium text-white white-space-nowrap">Rate</span>
                                                        <i className="pi pi-thumbs-up-fill text-white"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide key={`slide-3-${activeSlide}`} slideIndex={3} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div
                                        className="p-2 border-round-xl"
                                        style={{
                                            background: 'var(--style-cards-bg)',
                                            border: ' 1px solid rgba(255, 255, 255, 0.1)',
                                            backgroundBlendMode: 'normal, color-dodge',
                                            width: '300px'
                                        }}
                                    >
                                        <div className="content bg-white p-2">
                                            <div className="content-image bg-cover bg-no-repeat bg-center relative" style={{ height: ' 247px', backgroundImage: 'url("https://www.primefaces.org/cdn/primeflex/images/landing/style-cards/basic.jpg")' }}>
                                                <div className="rating mt-2 absolute ml-2 p-2 bg-white flex align-items-center gap-2 opacity-90 w-8rem ">
                                                    <i className="pi pi-star-fill text-gray-900"></i>
                                                    <i className="pi pi-star-fill text-gray-900"></i>
                                                    <i className="pi pi-star-fill text-gray-900 "></i>
                                                    <i className="pi pi-star-fill text-gray-600"></i>
                                                    <i className="pi pi-star-fill text-gray-600"></i>
                                                </div>
                                            </div>
                                            <div className="content-info pt-1">
                                                <div className="flex align-items-center justify-content-between py-2 px-3">
                                                    <span className="font-medium text-gray-900">Prime Coffee Shop</span>
                                                    <i className="pi pi-verified text-gray-900"></i>
                                                </div>
                                                <div className="flex align-items-center justify-content-between py-2 px-3 gap-2">
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Cold Brew</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-2">
                                                        <i className="pi pi-star-fill "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">10:00 - 17:00</span>
                                                    </div>
                                                </div>
                                                <div className="flex align-items-center justify-content-between py-2 px-1 gap-2">
                                                    <div className="flex align-items-center justify-content-center gap-1 border-right-1 surface-border pr-3">
                                                        <i className="pi pi-bolt "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Charge</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 border-right-1 surface-border pr-3">
                                                        <i className="pi pi-wifi "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Wifi</span>
                                                    </div>
                                                    <div className="flex align-items-center gap-1 justify-content-center gap-1 ">
                                                        <i className="pi pi-book "></i>
                                                        <span className="font-small text-gray-900 white-space-nowrap">Library</span>
                                                    </div>
                                                </div>
                                                <div className="flex align-items-center justify-content-center pt-2  gap-2">
                                                    <button className="p-3 flex align-items-center justify-content-center w-7 gap-2 bg-black-alpha-10 shadow-1 border-none cursor-pointer hover:bg-black-alpha-20 transition-duration-200">
                                                        <span className="font-medium text-gray-900 white-space-nowrap">Contact</span>
                                                        <i className="pi pi-send text-gray-900"></i>
                                                    </button>
                                                    <button className="p-3 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200">
                                                        <span className="font-medium text-white white-space-nowrap">Rate</span>
                                                        <i className="pi pi-thumbs-up-fill text-white"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>

                        <div className="landing-style-code-section">
                            <CustomCodeHighlight code key={code}>
                                {code}
                            </CustomCodeHighlight>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StyleSection;
