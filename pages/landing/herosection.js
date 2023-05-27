import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const Typewriter = ({ data, setClassName }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const handleType = useCallback(() => {
        const currentIndex = index % data.length;
        const fullText = data[currentIndex];

        if (isDeleting) {
            if (text === '') {
                setIsDeleting(false);
                setIndex((prevIndex) => prevIndex + 1);
                setClassName('');
                setTypingSpeed(250);
            } else {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(50);
            }
        } else {
            if (text === fullText) {
                setTimeout(() => setIsDeleting(true), 5000);
            } else {
                setText(fullText.substring(0, text.length + 1));
                setClassName(data[currentIndex]);
                setTypingSpeed(250);
            }
        }
    }, [index, data, isDeleting, text, setClassName]);

    useEffect(() => {
        const timer = setTimeout(handleType, typingSpeed);

        return () => clearTimeout(timer);
    }, [handleType, typingSpeed]);

    return <span>{text}</span>;
};

const HeroSection = ({ dark }) => {
    const [borderClass, setBorderClassName] = useState('border-round');
    const borders = ['border-round', 'border-round-2xl'];

    const [flexClass, setFlexClassName] = useState('flex-row');
    const flexs = ['flex-row', 'flex-column'];
    const [npmText, npmCopied] = useState('npm i primeflex');

    return (
        <section className="landing-hero-section relative">
            <span className="hero-bg-light-1"></span>
            <span className="hero-bg-light-2"></span>
            <span className="hero-bg-light-3"></span>
            <span className="hero-bg-light-4"></span>
            {dark && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '-118px',
                        objectFit: 'cover',
                        zIndex: '0',
                        height: 'calc(100% + 118px)'
                    }}
                >
                    <source src="https://www.primefaces.org/cdn/primeflex/images/landing/hero-primeflex-dark.webm" type="video/webm" />
                </video>
            )}
            {!dark && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '-118px',
                        objectFit: 'cover',
                        zIndex: '0',
                        height: 'calc(100% + 118px)'
                    }}
                >
                    <source src="https://www.primefaces.org/cdn/primeflex/images/landing/hero-primeflex-light.webm" type="video/webm" />
                </video>
            )}
            <div className="landing-hero-container pt-7 pb-8 px-5 relative z-5">
                <div className="landing-hero-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    {/* <Link href="/" className="updates-link" aria-label="PrimeReact logo">
                        <span className="updates-icon"></span>
                        <span className="updates-text">See New Update Notes</span>
                    </Link> */}

                    <h1 className="landing-title font-bold m-0 mt-5 text-7xl lg:text-8xl">Perfect CSS Utility Companion</h1>
                    <h3 className="landing-subtitle m-0 text-xl font-normal text-center">PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.</h3>
                </div>
                <div className="landing-hero-getstarted flex flex-column md:flex-row align-items-center justify-content-center">
                    <Link href="/installation" className="linkbox-button active fadeinleft animation-duration-2000 animation-ease-out ">
                        Get Started <i className="pi pi-bolt"></i>
                    </Link>
                    <div className="box download-box fadeinright animation-duration-2000 animation-ease-out border-1 ">
                        <span className="npm-text text-700" style={{ fontFamily: 'monaco, monospace' }}>
                            {npmText}
                        </span>
                        <button
                            className="copy-button cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText('npm i primeflex');
                                npmCopied('copied!');
                                setTimeout(() => {
                                    npmCopied('npm i primeflex');
                                }, 2000);
                            }}
                        >
                            <i className="pi pi-copy"></i>
                        </button>
                    </div>
                </div>
                <div className="landing-hero-example flex justify-content-center my-8 mx-auto relative">
                    <div className="example-card-wrapper">
                        <div className="example-card-container relative block">
                            <span className="card-container-classes absolute block p-1 font-medium text-sm text-center text-blue-500">
                                border-1 surface-border flex gap-2 <Typewriter data={borders} setClassName={setBorderClassName} />
                            </span>

                            <div className={'example-card flex flex-column align-items-start p-3 py-5 md:p-5 gap-5 ' + borderClass}>
                                <div className="example-card-header-container">
                                    <span className="header-container-classes absolute block p-1 font-medium text-sm text-center text-purple-400">
                                        flex w-full gap-2 p-4 <Typewriter data={flexs} setClassName={setFlexClassName} />
                                    </span>
                                    <div className={'example-card-header gap-1 sm:gap-2 flex justify-content-between align-items-center w-full ' + flexClass}>
                                        <img src="https://www.primefaces.org/cdn/primeflex/images/landing/profile.png" alt="Landing Profile" width={100} height={100} className="w-3rem h-3rem sm:w-5rem sm:h-5rem md:w-7rem md:h-7rem"></img>
                                        <div className="example-card-header-content flex align-items-center gap-3 sm:gap-5">
                                            <div className="content-info text-center md:text-right">
                                                <h3 className="font-medium text-xl sm:text-2xl md:text-4xl m-0 mb-2">73</h3>
                                                <span className="block font-normal ">Posts</span>
                                            </div>
                                            <div className="content-info text-center sm:text-right">
                                                <h3 className="font-medium text-xl sm:text-2xl md:text-4xl m-0 mb-2">73.3K</h3>
                                                <span className="block font-normal ">Followers</span>
                                            </div>
                                            <div className="content-info text-center md:text-right">
                                                <h3 className="font-medium  text-xl sm:text-2xl md:text-4xl m-0 mb-2">204</h3>
                                                <span className="block font-normal md:text-md text-sm">Following</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="example-card-content-container relative w-full">
                                    <span className="content-container-classes absolute block p-1 font-medium text-sm text-center text-pink-500">flex w-full gap-2 flex-column p-4</span>
                                    <div className="example-card-content flex align-items-center justify-content-between gap-3 sm:gap-6 sm:flex-row flex-column">
                                        <div className="content">
                                            <h3 className="font-bold text-xl sm:text-2xl white-space-nowrap m-0">Jane JOSHUA</h3>
                                            <h3 className="font-normal text-xl sm:text-2xl white-space-nowrap m-0 mt-2">Freelance UI/UX Designer</h3>
                                        </div>
                                        <Link href="/" className="linkbox-button">
                                            Follow
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
