import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Slider } from 'primereact/slider';
import { DocSectionCode } from '../../components/doc/common/docsectioncode';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import { classNames } from 'primereact/utils';

const StyleSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [is3D, setIs3D] = useState(false);

    // const codes = {
    //     glass: `<div class="glass p-2 border-round-xl">`,
    //     fancy: `<div class="fancy p-2 border-round-xl">`,
    //     modern: `<div class="modern p-2 border-round-xl">`,
    //     basic: `<div class="basic p-2 border-round-xl">`,
    // };

    const codes = {
        glass: `<div class="glassmorphic p-2 border-round-xl">
<div class="content p-2 h-full relative bg-cover bg-no-repeat bg-center border-round-xl shadow-1 flex flex-column justify-content-end">
    <div class="content-image absolute top-0 right-0">
        <div class="rating mt-2 border-round-sm mr-2 p-2 flex align-items-center gap-2 bg-white-alpha-20 w-8rem border-1 surface-border">
            <i class="pi pi-star-fill text-white"></i>
            <i class="pi pi-star-fill text-white"></i>
            <i class="pi pi-star-fill text-white"></i>
            <i class="pi pi-star-fill text-white-alpha-50"></i>
            <i class="pi pi-star-fill text-white-alpha-50"></i>
        </div>
    </div>
    <div class="content-info mt-2 border-round-sm bg-white-alpha-20 border-1 surface-border border-round-lg">
        <div class="flex align-items-center justify-content-between py-2 px-3 border-bottom-1 surface-border">
            <span class="font-medium text-white">Prime Coffee Shop</span>
            <i class="pi pi-star-fill text-white"></i>
        </div>
        <div class="flex align-items-center justify-content-between py-2 px-3 gap-2 border-bottom-1 surface-border">
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
        <div class="flex align-items-center justify-content-center py-2 gap-2">
            <button
            class="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-none cursor-pointer hover:bg-white-alpha-20
transition-duration-200"
            style="backdrop-filter: blur(27px);"
        >
            <span class="font-medium text-white white-space-nowrap">Contact</span>
            <i class="pi pi-send text-white"></i>
        </button>
        <button class="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
            <span class="font-medium text-white white-space-nowrap">Rate</span>
            <i class="pi pi-thumbs-up-fill text-white"></i>
        </button>
    </div>
</div>
</div>`,
        fancy: `<div class="p-2 border-round-xl" style="background: radial-gradient(93.88% 63.6% at 50% 0%, rgba(2, 225, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), #01041B; border: 1px solid rgba(255, 255, 255, 0.1); background-blend-mode: normal, color-dodge; height: 450px; width: 300px;">
<div class="content p-2 border-round-sm">
    <div class="content-image bg-cover bg-no-repeat bg-center relative" style="height: 247px; background-image: url(/images/landing/style-cards/fancy.jpg);">
        <div class="rating mt-2 border-round-sm absolute ml-2 p-2 flex align-items-center gap-2 bg-black-alpha-20 w-8rem border-1" style="backdrop-filter: blur(27px);">
            <i class="pi pi-star-fill text-white"></i>
            <i class="pi pi-star-fill text-white"></i>
            <i class="pi pi-star-fill text-white"></i>
            <i class="pi pi-star-fill text-gray-600"></i>
            <i class="pi pi-star-fill text-gray-600"></i>
        </div>
        </div>
        <div class="content-info mt-2 border-round-sm bg-white-alpha-10 shadow-1" style="backdrop-filter: blur(27px);">
            <div class="flex align-items-center justify-content-between py-2 px-3">
                <span class="font-medium text-white">Prime Coffee Shop</span>
                <i class="pi pi-star-fill text-white"></i>
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
            <div class="flex align-items-center justify-content-center py-2 px-3 gap-2">
                <button
                class="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-none cursor-pointer hover:bg-white-alpha-20
    transition-duration-200"
            >
                <span class="font-medium text-white white-space-nowrap">Contact</span>
                <i class="pi pi-send text-white"></i>
            </button>
            <button class="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
                <span class="font-medium text-white white-space-nowrap">Rate</span>
                <i class="pi pi-thumbs-up-fill text-white"></i>
            </button>
        </div>
    </div>
</div>
</div>`,
        basic: `<div class="p-2 border-round-xl" style="background: linear-gradient(0deg, rgba(1, 4, 27, 0.4), rgba(1, 4, 27, 0.4)), radial-gradient(93.88% 63.6% at 50% 0%, rgba(2, 225, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%); border: 1px solid rgba(255, 255, 255, 0.1); background-blend-mode: normal, color-dodge; height: 450px; width: 300px;">
<div class="content bg-white p-2">
    <div class="content-image bg-cover bg-no-repeat bg-center relative" style="height: 247px; background-image: url(/images/landing/style-cards/basic.jpg);">
        <div class="rating mt-2 absolute ml-2 p-2 bg-white flex align-items-center gap-2 opacity-90 w-8rem">
            <i class="pi pi-star-fill text-gray-900"></i>
            <i class="pi pi-star-fill text-gray-900"></i>
            <i class="pi pi-star-fill text-gray-900"></i>
            <i class="pi pi-star-fill text-gray-600"></i>
            <i class="pi pi-star-fill text-gray-600"></i>
        </div>
    </div>
    <div class="content-info">
        <div class="flex align-items-center justify-content-between py-2 px-3">
            <span class="font-medium text-gray-900">Prime Coffee Shop</span>
            <i class="pi pi-star-fill"></i>
        </div>
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
        <div class="flex align-items-center justify-content-center py-2 px-3 gap-2">
            <button class="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 bg-black-alpha-10 shadow-1 border-none cursor-pointer hover:bg-black-alpha-20 transition-duration-200">
            <span class="font-medium text-gray-900 white-space-nowrap">Contact</span>
            <i class="pi pi-send text-gray-900"></i>
        </button>
        <button class="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200">
            <span class="font-medium text-white white-space-nowrap">Rate</span>
            <i class="pi pi-thumbs-up-fill text-white"></i>
        </button>
        </div>
    </div>
</div>
</div>`,
        modern: `<div style="background: linear-gradient(0deg, rgba(1, 4, 27, 0.4), rgba(1, 4, 27, 0.4)), radial-gradient(93.88% 63.6% at 50% 0%, rgba(2, 225, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%); border: 1px solid rgba(255, 255, 255, 0.1); background-blend-mode: normal, color-dodge; height: 450px; width: 300px;" class="p-2 border-round-xl">
<div class="content bg-white h-full p-2">
    <div class="flex align-items-center gap-2 py-2 px-3">
        <i class="pi pi-star-fill"></i>
        <span class="font-medium text-gray-900">Prime Coffee Shop</span>
    </div>
    <div class="mt-3 content-image-wrapper relative text-center w-full flex align-items-center justify-content-center">
        <div class="content-image bg-cover bg-no-repeat bg-center h-14rem w-7rem z-4" style="background-image: url(/images/landing/style-cards/modern.jpg); border-radius: 70px;"></div>
        <span class="block absolute w-11rem h-5rem bg-orange-300 z-3 origin-top-center -rotate-45"></span>
        <span class="block absolute w-11rem h-5rem bg-orange-300 z-2 origin-bottom-center rotate-45"></span>
    </div>
    <div class="rating mt-3 mb-3 flex align-items-center justify-content-center gap-2 w-full ">
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
            <div class="flex align-items-center gap-2">
                <button
                class="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 bg-white border-1 shadow-1 cursor-pointer hover:bg-black-alpha-10 transition-duration-200"
                    style="border-radius: 50px;"
                >
                    <span class="font-medium text-gray-900 white-space-nowrap">Contact</span>
                    <i class="pi pi-send text-gray-900"></i>
                </button>
                <button
                class="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200"
                    style="border-radius: 50px;"
                >
                    <span class="font-medium text-white white-space-nowrap">Rate</span>
                    <i class="pi pi-thumbs-up-fill text-white"></i>
                </button>
        </div>
    </div>
</div>
</div>`
    };

    const [code, setCode] = useState(codes.glass);

    const handleSlideClick = useCallback((slideIndex) => {
        setActiveSlide(slideIndex);
    }, []);

    useEffect(() => {
        switch (activeSlide) {
            case 0:
                setCode(codes.basic);
                break;
            case 1:
                setCode(codes.fancy);
                break;
            case 2:
                setCode(codes.modern);
                break;
            case 3:
                setCode(codes.glass);
                break;
            default:
                break;
        }
    }, [activeSlide, codes]);

    function Slide(props) {
        const slideRef = useRef(null);

        const handleClick = useCallback(() => {
            props.onClick();
        }, [props]);

        useEffect(() => {
            if (props.activeSlide === props.slideIndex) {
                slideRef.current.classList.add('active');
            } else {
                slideRef.current.classList.remove('active');
            }
        }, [props.activeSlide, props.slideIndex]);

        return (
            <div ref={slideRef} className={`slide ${props.is3D ? '' : '_2D'}`} onClick={handleClick}>
                <div className={`content`}>{props.children}</div>
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

    
    return (
        <section className="landing-style-section relative">
            <div className="landing-style-container pt-7 pb-8 px-5 relative z-5">
                <div className="landing-style-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    <h1 className="landing-style-title font-semibold m-0">Create Your Style</h1>
                    <h3 className="landing-style-subtitle m-0 text-xl font-normal text-center">PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.</h3>
                
                    <Link href="/installation" className="linkbox-button active w-9rem fadeinleft animation-duration-2000 animation-ease-out">
                        Learn more
                    </Link>
                </div>
                <div className="landing-style-cards-wrapper flex align-items-center justify-content-center mt-5">
                    {/* <div id="slider-wrapp">
                        <div id="slider">
                            <Slide slideIndex={0} activeSlide={activeSlide} onClick={() => handleSlideClick(0)}>
                                a
                            </Slide>
                            <Slide slideIndex={1} activeSlide={activeSlide} onClick={() => handleSlideClick(1)}>
                                aaaa
                            </Slide>
                            <Slide slideIndex={2} activeSlide={activeSlide} onClick={() => handleSlideClick(2)}>
                                aaaaaaa
                            </Slide>
                            <Slide slideIndex={3} activeSlide={activeSlide} onClick={() => handleSlideClick(3)}>
                                aaaaa
                            </Slide>
                        </div>
                    </div> */}

                    <div id="slider-wrapp" className=' w-6'>
                        <div id="slider">
                            <Slide slideIndex={0} activeSlide={activeSlide} onClick={() => handleSlideClick(0)}>
                                <div
                                    className="p-2 border-round-xl"
                                    style={{
                                        background: 'background: linear-gradient(0deg, rgba(1, 4, 27, 0.4), rgba(1, 4, 27, 0.4)), radial-gradient(93.88% 63.6% at 50% 0%, rgba(2, 225, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)',
                                        border: ' 1px solid rgba(255, 255, 255, 0.1)',
                                        backgroundBlendMode: 'normal, color-dodge',
                                        height: '450px',
                                        width: '300px'
                                    }}
                                >
                                    <div className="content bg-white p-2">
                                        <div className="content-image bg-cover bg-no-repeat bg-center relative" style={{ height: ' 247px', backgroundImage: 'url(/images/landing/style-cards/basic.jpg)' }}>
                                            <div className="rating mt-2 absolute ml-2 p-2 bg-white flex align-items-center gap-2 opacity-90 w-8rem ">
                                                <i className="pi pi-star-fill text-gray-900"></i>
                                                <i className="pi pi-star-fill text-gray-900"></i>
                                                <i className="pi pi-star-fill text-gray-900 "></i>
                                                <i className="pi pi-star-fill text-gray-600"></i>
                                                <i className="pi pi-star-fill text-gray-600"></i>
                                            </div>
                                        </div>
                                        <div className="content-info">
                                            <div className="flex align-items-center justify-content-between py-2 px-3">
                                                <span className="font-medium text-gray-900">Prime Coffee Shop</span>
                                                <i className="pi pi-star-fill "></i>
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
                                            <div className="flex align-items-center justify-content-center py-2 px-3 gap-2">
                                                <button className="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 bg-black-alpha-10 shadow-1 border-none cursor-pointer hover:bg-black-alpha-20 transition-duration-200">
                                                    <span className="font-medium text-gray-900 white-space-nowrap">Contact</span>
                                                    <i className="pi pi-send text-gray-900"></i>
                                                </button>
                                                <button className="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200">
                                                    <span className="font-medium text-white white-space-nowrap">Rate</span>
                                                    <i className="pi pi-thumbs-up-fill text-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide slideIndex={1} activeSlide={activeSlide} onClick={() => handleSlideClick(1)}>
                                <div
                                    className="p-2 border-round-xl"
                                    style={{
                                        background: 'background: radial-gradient(93.88% 63.6% at 50% 0%, rgba(2, 225, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), #01041B;',
                                        border: ' 1px solid rgba(255, 255, 255, 0.1)',
                                        backgroundBlendMode: 'normal, color-dodge',
                                        height: '450px',
                                        width: '300px'
                                    }}
                                >
                                    <div className="content p-2 border-round-sm">
                                        <div className="content-image bg-cover bg-no-repeat bg-center relative" style={{ height: ' 247px', backgroundImage: 'url(/images/landing/style-cards/fancy.jpg)' }}>
                                            <div className="rating mt-2 border-round-sm absolute ml-2 p-2 flex align-items-center gap-2 bg-black-alpha-20 w-8rem border-1" style={{ backdropFilter: 'blur(27px)' }}>
                                                <i className="pi pi-star-fill text-white"></i>
                                                <i className="pi pi-star-fill text-white"></i>
                                                <i className="pi pi-star-fill text-white "></i>
                                                <i className="pi pi-star-fill text-gray-600"></i>
                                                <i className="pi pi-star-fill text-gray-600"></i>
                                            </div>
                                        </div>
                                        <div className="content-info mt-2 border-round-sm bg-white-alpha-10 shadow-1" style={{ backdropFilter: 'blur(27px)' }}>
                                            <div className="flex align-items-center justify-content-between py-2 px-3">
                                                <span className="font-medium text-white">Prime Coffee Shop</span>
                                                <i className="pi pi-star-fill text-white"></i>
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
                                            <div className="flex align-items-center justify-content-center py-2 px-3 gap-2">
                                                <button
                                                    className="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-none cursor-pointer hover:bg-white-alpha-20
transition-duration-200"
                                                    style={{ backdropFilter: 'blur(27px)' }}
                                                >
                                                    <span className="font-medium text-white white-space-nowrap">Contact</span>
                                                    <i className="pi pi-send text-white"></i>
                                                </button>
                                                <button className="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
                                                    <span className="font-medium text-white white-space-nowrap">Rate</span>
                                                    <i className="pi pi-thumbs-up-fill text-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide slideIndex={2} activeSlide={activeSlide} onClick={() => handleSlideClick(2)}>
                                <div
                                    className="p-2 border-round-xl"
                                    style={{
                                        background: 'background: linear-gradient(0deg, rgba(1, 4, 27, 0.4), rgba(1, 4, 27, 0.4)), radial-gradient(93.88% 63.6% at 50% 0%, rgba(2, 225, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)',
                                        border: ' 1px solid rgba(255, 255, 255, 0.1)',
                                        backgroundBlendMode: 'normal, color-dodge',
                                        height: '450px',
                                        width: '300px'
                                    }}
                                >
                                    <div className="content bg-white h-full p-2">
                                        <div className="flex align-items-center gap-2 py-2 px-3">
                                            <i className="pi pi-star-fill "></i>
                                            <span className="font-medium text-gray-900">Prime Coffee Shop</span>
                                        </div>
                                        <div className="mt-3 content-image-wrapper relative text-center w-full flex align-items-center justify-content-center">
                                            <div className="content-image bg-cover bg-no-repeat bg-center h-14rem w-7rem z-4" style={{ backgroundImage: 'url(/images/landing/style-cards/modern.jpg)', borderRadius: '70px' }}></div>
                                            <span className="block absolute w-11rem h-5rem bg-orange-300 z-3 origin-top-center -rotate-45"></span>
                                            <span className="block absolute w-11rem h-5rem bg-orange-300 z-2 origin-bottom-center rotate-45"></span>
                                        </div>
                                        <div className="rating mt-3 mb-3 flex align-items-center justify-content-center gap-2 w-full ">
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
                                            <div className="flex align-items-center justify-content-center py-2 px-3 gap-2">
                                                <button
                                                    className="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 bg-white border-1 shadow-1 cursor-pointer hover:bg-black-alpha-10 transition-duration-200"
                                                    style={{ borderRadius: '50px' }}
                                                >
                                                    <span className="font-medium text-gray-900 white-space-nowrap">Contact</span>
                                                    <i className="pi pi-send text-gray-900"></i>
                                                </button>
                                                <button
                                                    className="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-gray-900 shadow-1 border-none cursor-pointer hover:bg-gray-800 transition-duration-200"
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
                            <Slide slideIndex={3} activeSlide={activeSlide} onClick={() => handleSlideClick(3)}>
                                <div
                                    className="glassmorphic p-2 border-round-xl"
                                    style={{
                                        background: 'background: radial-gradient(93.88% 63.6% at 50% 0%, rgba(2, 225, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), #01041B;',
                                        border: ' 1px solid rgba(255, 255, 255, 0.1)',
                                        backgroundBlendMode: 'normal, color-dodge',
                                        height: '450px',
                                        width: '300px'
                                    }}
                                >
                                    <div
                                        className="content p-2 h-full relative bg-cover bg-no-repeat bg-center border-round-xl shadow-1 flex flex-column justify-content-end"
                                        style={{ background: 'linear-gradient(112.31deg,rgba(0, 224, 143, 0.6), rgba(0, 194, 255, 0.5)),url(/images/landing/style-cards/glassmorphic.jpg)', backgroundBlendMode: 'color-dodge, normal, normal' }}
                                    >
                                        <div className="content-image  absolute top-0  right-0">
                                            <div className="rating mt-2 border-round-sm mr-2 p-2 flex align-items-center gap-2 bg-white-alpha-20 w-8rem border-1 surface-border" style={{ backdropFilter: 'blur(27px)' }}>
                                                <i className="pi pi-star-fill text-white"></i>
                                                <i className="pi pi-star-fill text-white"></i>
                                                <i className="pi pi-star-fill text-white "></i>
                                                <i className="pi pi-star-fill text-white-alpha-50"></i>
                                                <i className="pi pi-star-fill text-white-alpha-50"></i>
                                            </div>
                                        </div>
                                        <div className="content-info mt-2 border-round-sm bg-white-alpha-20  border-1 surface-border border-round-lg" style={{ backdropFilter: 'blur(27px)' }}>
                                            <div className="flex align-items-center justify-content-between py-2 px-3 border-bottom-1 surface-border">
                                                <span className="font-medium text-white">Prime Coffee Shop</span>
                                                <i className="pi pi-star-fill text-white"></i>
                                            </div>
                                            <div className="flex align-items-center justify-content-between py-2 px-3 gap-2  border-bottom-1 surface-border">
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
                                        <div className="flex align-items-center justify-content-center py-2  gap-2">
                                            <button
                                                className="px-3 py-2 flex align-items-center justify-content-center w-7 gap-2 border-round-sm bg-white-alpha-10 shadow-1 border-none cursor-pointer hover:bg-white-alpha-20
transition-duration-200"
                                                style={{ backdropFilter: 'blur(27px)' }}
                                            >
                                                <span className="font-medium text-white white-space-nowrap">Contact</span>
                                                <i className="pi pi-send text-white"></i>
                                            </button>
                                            <button className="px-3 py-2 flex align-items-center justify-content-center w-5 gap-2 bg-blue-500 shadow-1 border-round-sm border-none cursor-pointer hover:bg-blue-600 transition-duration-200">
                                                <span className="font-medium text-white white-space-nowrap">Rate</span>
                                                <i className="pi pi-thumbs-up-fill text-white"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>

                    <div className="landing-style-code-section w-6">
                        <CustomCodeHighlight code key={code}>
                            {code}
                        </CustomCodeHighlight>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StyleSection;
