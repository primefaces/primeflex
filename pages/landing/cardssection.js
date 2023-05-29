import Link from 'next/link';
import { Slider } from 'primereact/slider';
import { useEffect, useState } from 'react';

const CardsSection = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [cardWidths, setCardWidths] = useState({});

    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        if (windowWidth !== null) {
            setCardWidths({
                cardWidth24: windowWidth < 768 ? 8 : 24,
                cardWidth10: windowWidth < 768 ? 4 : 10,
                cardWidth22: windowWidth < 768 ? 7 : 22,
                cardWidth12: windowWidth < 768 ? 5 : 12,
                cardWidth14: windowWidth < 768 ? 5 : 14,
                cardWidth20: windowWidth < 768 ? 7 : 20
            });
        }
    }, [windowWidth]);

    useEffect(() => {
        if (windowWidth !== null) {
            const interval = setInterval(() => {
                setCardWidths((prevWidths) => ({
                    ...prevWidths,
                    cardWidth24: windowWidth < 768 ? (prevWidths['cardWidth24'] === 8 ? 7 : 8) : prevWidths['cardWidth24'] === 24 ? 18 : 24,
                    cardWidth10: windowWidth < 768 ? (prevWidths['cardWidth10'] === 4 ? 5 : 4) : prevWidths['cardWidth10'] === 10 ? 16 : 10,
                    cardWidth22: windowWidth < 768 ? (prevWidths['cardWidth22'] === 7 ? 6 : 7) : prevWidths['cardWidth22'] === 22 ? 16 : 22,
                    cardWidth12: windowWidth < 768 ? (prevWidths['cardWidth12'] === 5 ? 6 : 5) : prevWidths['cardWidth12'] === 12 ? 18 : 12,
                    cardWidth14: windowWidth < 768 ? (prevWidths['cardWidth14'] === 5 ? 4 : 5) : prevWidths['cardWidth14'] === 14 ? 20 : 14,
                    cardWidth20: windowWidth < 768 ? (prevWidths['cardWidth20'] === 7 ? 8 : 7) : prevWidths['cardWidth20'] === 20 ? 14 : 20
                }));
            }, 6000);

            return () => clearInterval(interval);
        }
    }, [windowWidth]);

    const [waves, setWaves] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWaves((prevWaves) => {
                const newWaves = [...prevWaves];

                newWaves.unshift(newWaves.pop());

                return newWaves;
            });
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const [weight, setWeight] = useState(80);
    const [size, setSize] = useState(72);

    function handleSliderWeightChange(event) {
        setWeight(event.value);
    }

    function handleSliderSizeChange(event) {
        setSize(event.value);
    }

    let isItalic = false;

    function handleClick() {
        let sliderTitle = document.querySelector('.typo-title');

        isItalic = !isItalic;
        sliderTitle.classList.toggle('font-italic');
    }

    useEffect(() => {
        let sliderTitle = document.querySelector('.typo-title');
        let className = 'typo-title';

        if (sliderTitle.classList.contains('font-italic')) {
            className += ' font-italic';
        }

        if (weight >= 0 && weight < 25) {
            className += ' font-light';
        } else if (weight >= 25 && weight < 50) {
            className += ' font-normal';
        } else if (weight >= 50 && weight < 75) {
            className += ' font-medium';
        } else if (weight >= 75 && weight < 100) {
            className += ' font-semibold';
        } else if (weight === 100) {
            className += ' font-bold';
        }

        if (size >= 0 && size < 8) {
            className += ' text-xs';
        } else if (size >= 8 && size < 16) {
            className += ' text-sm';
        } else if (size >= 16 && size < 24) {
            className += ' text-base';
        } else if (size >= 24 && size < 32) {
            className += ' text-lg';
        } else if (size >= 32 && size < 40) {
            className += ' text-xl';
        } else if (size >= 40 && size < 48) {
            className += ' text-2xl';
        } else if (size >= 48 && size < 56) {
            className += ' text-3xl';
        } else if (size >= 56 && size < 64) {
            className += ' text-4xl';
        } else if (size >= 64 && size < 72) {
            className += ' text-5xl';
        } else if (size >= 72 && size < 80) {
            className += ' text-6xl';
        } else if (size >= 80 && size < 88) {
            className += ' text-7xl';
        } else if (size >= 88 && size < 96) {
            className += ' text-8xl';
        } else if (size >= 96 && size <= 100) {
            className += ' text-8xl';
        }

        sliderTitle.className = className;
    }, [weight, size]);

    return (
        <section className="landing-cards-section relative landing-section-border">
            <div className="landing-cards-container py-8 px-5 relative z-5 flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center">
                <div className="landing-cards-content text-center flex flex-column justify-content-center align-items-center gap-5">
                    <h1 className="landing-title font-bold m-0 text-6xl md:text-7xl">Empowering Web Design</h1>
                    <h3 className="landing-subtitle m-0 text-xl md:text-2xl font-normal text-center">
                        Unlock consistency and flexibility in your designs with our collection of pre-built components and utility classes, designed to work seamlessly across all screen sizes.
                    </h3>
                    <Link href="/installation" className="linkbox-button active fadeinleft animation-duration-2000 animation-ease-out mx-auto ">
                        Learn More
                    </Link>
                </div>
                <div className="landing-cards-wrapper pt-3 flex justify-content-center">
                    <div className="landing-cards flex flex-wrap justify-content-center gap-3 overflow-hidden">
                        <div className="landing-card colors overflow-hidden">
                            <div className="color-cards relative flex flex-column align-items-start gap-3">
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-orange-400"></div>
                                        <span>orange-400</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-orange-500"></div>
                                        <span>orange-500</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-orange-600"></div>
                                        <span>orange-600</span>
                                    </div>
                                </div>
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-yellow-400"></div>
                                        <span>yellow-400</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-yellow-500"></div>
                                        <span>yellow-500</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-yellow-600"></div>
                                        <span>yellow-600</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-yellow-700"></div>
                                        <span>yellow-700</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-yellow-800"></div>
                                        <span>yellow-800</span>
                                    </div>
                                </div>
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-green-300"></div>
                                        <span>green-300</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-green-400"></div>
                                        <span>green-400</span>
                                    </div>
                                    <div className="colors-title">
                                        <span>WCAG</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-green-500"></div>
                                        <span>green-500</span>
                                    </div>

                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-green-600"></div>
                                        <span>green-600</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-green-700"></div>
                                        <span>green-700</span>
                                    </div>
                                </div>
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-teal-300"></div>
                                        <span>teal-300</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-teal-400"></div>
                                        <span>teal-400</span>
                                    </div>
                                    <div className="colors-title">
                                        <span>COMPATIBLE</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-teal-500"></div>
                                        <span>teal-500</span>
                                    </div>

                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-teal-600"></div>
                                        <span>teal-600</span>
                                    </div>
                                </div>
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-cyan-300"></div>
                                        <span>cyan-300</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-cyan-400"></div>
                                        <span>cyan-400</span>
                                    </div>
                                    <div className="colors-title">
                                        <span>COLOR</span>
                                    </div>
                                    <div className="colors-title">
                                        <span>PALETTE</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-cyan-500"></div>
                                        <span>cyan-500</span>
                                    </div>

                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-cyan-600"></div>
                                        <span>cyan-600</span>
                                    </div>
                                </div>
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-blue-300"></div>
                                        <span>blue-300</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-blue-400"></div>
                                        <span>blue-400</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-blue-500"></div>
                                        <span>blue-500</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-blue-600"></div>
                                        <span>blue-600</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-blue-700"></div>
                                        <span>blue-700</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-blue-800"></div>
                                        <span>blue-800</span>
                                    </div>
                                </div>
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-indigo-300"></div>
                                        <span>indigo-300</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-indigo-400"></div>
                                        <span>indigo-400</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-indigo-500"></div>
                                        <span>indigo-500</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-indigo-600"></div>
                                        <span>indigo-600</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-indigo-700"></div>
                                        <span>indigo-700</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-indigo-800"></div>
                                        <span>indigo-800</span>
                                    </div>
                                </div>
                                <div className="color-cards-row flex gap-3 align-items-center">
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-purple-300"></div>
                                        <span>purple-300</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-purple-400"></div>
                                        <span>purple-400</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-purple-500"></div>
                                        <span>purple-500</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-purple-600"></div>
                                        <span>purple-600</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-purple-700"></div>
                                        <span>purple-700</span>
                                    </div>
                                    <div className="color-card flex flex-column align-items-start p-2 gap-2">
                                        <div className="color-line bg-purple-800"></div>
                                        <span>purple-800</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="landing-card layout">
                            <div className="layout-cards">
                                <div className="layout-cards-row">
                                    <div className={`layout-card w-${cardWidths['cardWidth24']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth24']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                    <div className={`layout-card w-${cardWidths['cardWidth10']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth10']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                </div>
                                <div className="layout-cards-row">
                                    <div className={`layout-card w-${cardWidths['cardWidth22']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth22']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                    <div className={`layout-card w-${cardWidths['cardWidth12']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth12']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                </div>
                                <div className="layout-cards-row gap-0">
                                    <div className="layout-card static-card w-1 md:w-6rem">
                                        <span>{`${windowWidth >= 768 ? 'w-6rem' : '1'}`}</span>
                                    </div>
                                    <div className="layout-title white-nospace mx-2 md:w-auto">
                                        <span>LAYOUT UTILITIES</span>
                                    </div>
                                    <div className="layout-card static-card w-1 md:w-6rem">
                                        <span>{`${windowWidth >= 768 ? 'w-6rem' : '1'}`}</span>
                                    </div>
                                </div>
                                <div className="layout-cards-row">
                                    <div className={`layout-card w-${cardWidths['cardWidth14']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth14']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                    <div className={`layout-card w-${cardWidths['cardWidth20']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth20']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                </div>
                                <div className="layout-cards-row">
                                    <div className={`layout-card w-${cardWidths['cardWidth10']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth10']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                    <div className={`layout-card w-${cardWidths['cardWidth24']}${windowWidth >= 768 ? ' rem' : ''}`}>
                                        <span>w-{`${cardWidths['cardWidth24']}${windowWidth >= 768 ? ' rem' : ''}`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="landing-card shadows">
                            <div className="shadow-circles">
                                {waves.map((wave, i) => (
                                    <div key={`circle-${i}`} className={`shadow-circle circle-shadow-${8 - i}`} style={{ transform: `translateX(${wave}px)` }}></div>
                                ))}
                            </div>
                            <div className="shadows-text-content absolute w-full text-center">
                                <span className="shadows-title block m-0 mt-4 font-semibold">Shadow</span>
                                <span className="shadows-subtitle block font-normal">Elevation</span>
                            </div>
                        </div>
                        <div className="landing-card typo">
                            <div className="typo-text-content">
                                <span className="typo-title font-semibold text-7xl">Typography Properties</span>
                            </div>
                            <div className="typo-sliders flex  sm:flex-row">
                                <div className="slider p-2 pt-1 px-3">
                                    <div className="slider-header flex align-items-center justify-content-between pb-1">
                                        <span className="slider-title text-sm mb-2 block opacity-70">Light</span>
                                        <span className="slider-title text-sm mb-2 block">Weight</span>
                                        <span className="slider-title text-sm mb-2 block opacity-70">Bold</span>
                                    </div>

                                    <Slider value={weight} onChange={handleSliderWeightChange} step={25} />
                                </div>
                                <div className="slider p-2 pt-1 px-3">
                                    <div className="slider-header flex align-items-center justify-content-between pb-1">
                                        <span className="slider-title text-sm mb-2 block opacity-70">xs</span>
                                        <span className="slider-title text-sm mb-2 block">Size</span>
                                        <span className="slider-title text-sm mb-2 block opacity-70">8xl</span>
                                    </div>
                                    <Slider value={size} onChange={handleSliderSizeChange} step={8} />
                                </div>
                                <button className="typo-dec-button cursor-pointer hidden sm:block" onClick={handleClick}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.77295 1.33328H11.0832C11.6355 1.33328 12.0832 1.78099 12.0832 2.33328C12.0832 2.88556 11.6355 3.33328 11.0832 3.33328H9.44261L6.69262 10.6666H8.16602C8.7183 10.6666 9.16602 11.1143 9.16602 11.6666C9.16602 12.2189 8.7183 12.6666 8.16602 12.6666H5.27396C5.25767 12.667 5.24133 12.667 5.22496 12.6666H2.91602C2.36373 12.6666 1.91602 12.2189 1.91602 11.6666C1.91602 11.1143 2.36373 10.6666 2.91602 10.6666H4.55662L7.30661 3.33328H5.8332C5.28092 3.33328 4.8332 2.88556 4.8332 2.33328C4.8332 1.78099 5.28092 1.33328 5.8332 1.33328H8.72656C8.74199 1.33292 8.75746 1.33292 8.77295 1.33328Z"
                                            fill="var(--card-slider-text-color)"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardsSection;
