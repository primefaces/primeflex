import Link from 'next/link';
import { classNames } from 'primereact/utils';
import { useCallback, useEffect, useRef, useState } from 'react';

const StyleSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const wrapperRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [animationEnabled, setAnimationEnabled] = useState(true);
    const codes = {
        glass: `<div class="p-2 border-round-xl aa" style="background: var(--style-cards-bg); backgroundBlendMode: normal, color-dodge; width: 300px;">`,
        fancy: `<div class="p-2 border-round-xl aaaa" style="background: var(--style-cards-fancy-bg); border: 1px solid rgba(255, 255, 255, 0.1); backgroundBlendMode: normal, color-dodge; width: 300px;">`,
        basic: `<div class="p-2 border-round-xl aaaaaaa" style="background: var(--style-cards-bg); border: 1px solid rgba(255, 255, 255, 0.1); backgroundBlendMode: normal, color-dodge; width: 300px;">`,
        modern: `<div class="p-2 border-round-xl aaaaaaaaaa" style="background: var(--style-cards-bg); border: 1px solid rgba(255, 255, 255, 0.1); backgroundBlendMode: normal, color-dodge; width: 300px;">`
    };
    const [code, setCode] = useState(codes.glass);

    const handleSlideClick = useCallback(
        (slideIndex) => {
            setActiveSlide(slideIndex);
            const slideCodes = [codes.glass, codes.fancy, codes.modern, codes.basic];

            setCode(slideCodes[slideIndex]);
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
                    slideRef.current.classList.remove('fadeout', 'inactive');

                    if (animationEnabled) {
                        slideRef.current.classList.add('fadein');
                    }

                    setTimeout(() => {
                        if (slideRef.current) {
                            slideRef.current.classList.remove('fadein');
                        }
                    }, 1000);
                } else {
                    slideRef.current.style.zIndex = 0;
                    slideRef.current.classList.remove('fadein');

                    if (animationEnabled) {
                        slideRef.current.classList.add('fadeout');
                    }

                    setTimeout(() => {
                        if (slideRef.current) {
                            slideRef.current.classList.remove('fadeout');
                            slideRef.current.classList.add('inactive');
                        }
                    }, 1000);
                }
            }
        }, [activeSlide, props.slideIndex, animationEnabled]);

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
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [activeSlide, handleSlideClick, isHovering]);

    function handleSliderButtonClick(isNext) {
        if (isNext) {
            handleSlideClick((activeSlide + 1) % 4); // Changes to the next slide.
        } else {
            handleSlideClick((activeSlide + 3) % 4); // Changes to the previous slide.
        }
    }

    return (
        <section className="landing-style-section relative landing-section-border">
            <div className="landing-style-container pt-7 pb-8 px-5 relative z-5">
                <div className="landing-style-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    <h1 className="landing-title font-bold m-0 text-7xl">Create Your Style</h1>
                    <h3 className="landing-subtitle m-0 text-2xl font-normal text-center">Craft unique aesthetics with PrimeFlex's classes. Use our flexible toolkit to make your design vision a reality, embodying your brand's distinct style.</h3>

                    <Link href="/installation" className="linkbox-button active w-9rem fadeinleft animation-duration-2000 animation-ease-out text-700">
                        Learn more
                    </Link>
                </div>
                <div ref={wrapperRef} className="landing-style-cards-wrapper mt-5">
                    <div className="landing-style-cards-header flex">
                        <div className={`slide-1 slide-tab ${activeSlide === 0 ? 'slide-tab-active' : ''} ${isHovering ? 'pause-animation' : ''}`} onClick={() => handleSlideClick(0)}>
                            <span>Glassmorphic</span>
                        </div>
                        <div className={`slide-2 slide-tab ${activeSlide === 1 ? 'slide-tab-active' : ''} ${isHovering ? 'pause-animation' : ''}`} onClick={() => handleSlideClick(1)}>
                            <span>Modern</span>
                        </div>
                        <div className={`slide-3 slide-tab ${activeSlide === 2 ? 'slide-tab-active' : ''} ${isHovering ? 'pause-animation' : ''}`} onClick={() => handleSlideClick(2)}>
                            <span>Fancy</span>
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
                            setTimeout(() => setAnimationEnabled(true), 1000); // Adjust delay as needed
                        }}
                    >
                        <div id="slider-wrapp" className="slider-wrapp">
                            <div className="slider-buttons">
                                <button
                                    className="slider-button h-2rem w-2rem flex border-1 cursor-pointer surface-border border-circle justify-content-center p-0 m-0 align-items-center"
                                    onClick={() => handleSliderButtonClick(false)} // previous slide
                                >
                                    <i className="pi pi-chevron-left"></i>
                                </button>
                                <button
                                    className="slider-button h-2rem w-2rem flex border-1 cursor-pointer surface-border border-circle justify-content-center p-0 m-0 align-items-center"
                                    onClick={() => handleSliderButtonClick(true)} // next slide
                                >
                                    <i className="pi pi-chevron-right"></i>
                                </button>
                            </div>
                            <div id="slider" className="slider">
                                <Slide key={`slide-0-${activeSlide}`} slideIndex={0} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div className="w-14rem h-28rem bg-blue-200"></div>
                                </Slide>
                                <Slide key={`slide-1-${activeSlide}`} slideIndex={1} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div className="w-14rem h-28rem bg-pink-200"></div>
                                </Slide>
                                <Slide key={`slide-2-${activeSlide}`} slideIndex={2} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div className="w-14rem h-28rem bg-indigo-200"></div>
                                </Slide>
                                <Slide key={`slide-3-${activeSlide}`} slideIndex={3} activeSlide={activeSlide} onClick={handleSlideClick}>
                                    <div className="w-14rem h-28rem bg-green-200"></div>
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
