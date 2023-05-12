import { DocSearch } from '@docsearch/react';
import Link from 'next/link';
import { classNames } from 'primereact/utils';
import { useEffect, useRef, useState } from 'react';

const HeaderSection = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const colorSchemeIcon = classNames('pi', { 'pi-sun': props.dark, 'pi-moon': !props.dark });
    const containerElement = useRef(null);

    const changeColorScheme = () => {
        props.onToggleColorScheme();
    };

    const headerClassName = classNames('landing-header-section', { 'landing-header-active': menuActive });

    const scrollListener = useRef();

    const bindScrollListener = () => {
        scrollListener.current = () => {
            if (containerElement && containerElement.current) {
                if (window.scrollY > 0) containerElement.current.classList.add('landing-header-sticky');
                else containerElement.current.classList.remove('landing-header-sticky');
            }
        };

        window.addEventListener('scroll', scrollListener.current);
    };

    const unbindScrollListener = () => {
        if (scrollListener.current) {
            window.removeEventListener('scroll', scrollListener.current);
            scrollListener.current = null;
        }
    };

    useEffect(() => {
        bindScrollListener();

        return function unbind() {
            unbindScrollListener();
        };
    }, []);

    useEffect(() => {
        if (scrollListener.current) {
            scrollListener.current();
        }
    });

    return (
        <section ref={containerElement} className={headerClassName}>
            <div className="landing-header-container flex justify-content-between align-items-center">
                <div className="landing-header-left">
                    {' '}
                    <Link href="/" className="header-logo" aria-label="PrimeReact logo">
                        <img id="header-logo" src={`/images/primeflex-logo-${props.dark ? 'white' : 'dark'}.svg`} alt="prime"></img>
                    </Link>
                </div>
                <div className="landing-header-center opacity-0">
                    <DocSearch appId="SCRI13XXZO" apiKey="ea9e6c8a983c5646d6b9079921d4aed7" indexName="primereact" container="" debug={false} />
                </div>
                <div className="landing-header-right flex align-items-center">
                    <nav className="scalein origin-top">
                        <ol className="list-none m-0 p-0 flex flex-column lg:flex-row flex-wrap lg:flex-nowrap lg:align-items-center font-semibold">
                            <li className='mr-1'>
                                <Link href="/installation">
                                   Docs
                                </Link>
                            </li>
                            <li className='mr-1'>
                                <a href="/installation" target="_blank">
                                    Blocks
                                </a>
                            </li>
                            <li className='mr-1'>
                                <a href="/installation">
                                   Playground
                                </a>
                            </li>
                        </ol>
                    </nav>
                    <button type="button" className="linkbox border-none header-button inline-flex align-items-center justify-content-center mr-1 cursor-pointer" onClick={changeColorScheme}>
                        <i className={colorSchemeIcon}></i>
                    </button>
                    <a href="https://github.com/primefaces/primeflex" target="_blank" rel="noopener noreferrer" className="linkbox header-button mr-1 flex align-items-center justify-content-center flex-shrink-0">
                        <i className="pi pi-github"></i>
                    </a>
                    <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" className="linkbox header-button flex align-items-center justify-content-center flex-shrink-0">
                        <i className="pi pi-discord"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;


// import Link from 'next/link';
// import { useEffect, useRef, useState } from 'react';

// const HeroSection = () => {
//     const Typewriter = ({ data, period, isPaused, setIsPaused, callback }) => {
//         const [index, setIndex] = useState(0);
//         const [text, setText] = useState('');
//         const [isDeleting, setIsDeleting] = useState(false);
//         const [typingSpeed, setTypingSpeed] = useState(150);

//         const handleType = () => {
//             const currentIndex = index % data.length;
//             const fullText = data[currentIndex];

//             if (isDeleting) {
//                 setText(fullText.substring(0, text.length - 1));
//                 setTypingSpeed(30);
//             } else {
//                 setText(fullText.substring(0, text.length + 1));
//                 setTypingSpeed(150);
//             }

//             if (!isDeleting && text === fullText) {
//                 setIsDeleting(true);
//                 setTypingSpeed(1000);
//                 callback && callback(true);
//             } else if (isDeleting && text === '') {
//                 setIsDeleting(false);
//                 setIndex(index + 1);
//                 setTypingSpeed(150);
//                 callback && callback(false);
//             }
//         };

//         useEffect(() => {
//             let timer = null;

//             if (!isPaused) {
//                 timer = setTimeout(() => {
//                     handleType();
//                 }, typingSpeed);
//             }

//             return () => clearTimeout(timer);
//         }, [text, isDeleting, isPaused]);

//         return <span>{text}</span>;
//     };

//     const [isTyping, setIsTyping] = useState(true);
//     const [isPaused, setIsPaused] = useState(false);

//     const messages = ['border-round', 'border-round-2xl'];

//     const handleTypewriterCallback = (isFinished) => {
//         setIsTyping(!isFinished);

//         if (isFinished) {
//             setTimeout(() => {
//                 setIsPaused(true);
//                 setTimeout(() => {
//                     setIsPaused(false);
//                 }, 2000);
//             }, 2000);
//         }
//     };

//     return (
//         <section className="landing-hero-section">
//             <span className="ellipse-1"></span>
//             <span className="ellipse-2"></span>
//             <span className="ellipse-3"></span>
//             <span className="ellipse-4"></span>
//             <div className="landing-hero-container">
//                 <div className="landing-hero-content">
//                     <Link href="/" className="updates-link" aria-label="PrimeReact logo">
//                         <span className="updates-icon"></span>
//                         <span className="updates-text">See New Update Notes</span>
//                     </Link>

//                     <h1 className="landing-hero-title">Perfect CSS Utility Companion</h1>
//                     <h3 className="landing-hero-subtitle">PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.</h3>
//                 </div>
//                 <div className="landing-hero-getstarted flex flex-column md:flex-row align-items-center justify-content-center">
//                     <Link href="/installation" className="linkbox active fadeinleft animation-duration-2000 animation-ease-out">
//                         Get Started
//                     </Link>
//                     <div className="box download-box fadeinright animation-duration-2000 animation-ease-out">
//                         <span className="npm-text" style={{ fontFamily: 'monaco, monospace' }}>
//                             npm i primeflex
//                         </span>
//                         <button className="copy-button cursor-pointer">
//                             <i className="pi pi-copy"></i>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="landing-hero-example">
//                     <div className="example-card-container">
//                         <span className="card-container-classes">
//                             bg-surface border-1 surface-border flex gap-2 <Typewriter data={messages} period={150} isPaused={isPaused} setIsPaused={setIsPaused} callback={handleTypewriterCallback} />
//                         </span>

//                         <div className={'example-card ' + (isPaused ? 'border-round-2xl' : '')}>
//                             <div className="example-card-header-container">
//                                 <span className="header-container-classes">flex w-full gap-2 flex-column p-4</span>
//                                 <div className="example-card-header">
//                                     <img src="/images/landing/profile.png"></img>
//                                     <div className="example-card-header-content">
//                                         <div className="content-info">
//                                             <h3>73</h3>
//                                             <span>Posts</span>
//                                         </div>
//                                         <div className="content-info">
//                                             <h3>73.3K</h3>
//                                             <span>Followers</span>
//                                         </div>
//                                         <div className="content-info">
//                                             <h3>204</h3>
//                                             <span>Following</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="example-card-content-container">
//                                 <span className="content-container-classes">flex w-full gap-2 flex-column p-4</span>
//                                 <div className="example-card-content">
//                                     <div className="content">
//                                         <h3>Jane JOSHUA</h3>
//                                         <h3>Freelance UI/UX Designer</h3>
//                                     </div>
//                                     <Link href="/" className="linkbox">
//                                         Follow now
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="pattern">
//                 <div className="pattern-left">
//                     <div className="pattern-left-top-group">
//                         <span className="pattern-left-item item-1"></span>
//                         <span className="pattern-left-item item-2"></span>
//                         <span className="pattern-left-item item-3"></span>
//                         <span className="pattern-left-item item-4"></span>
//                         <span className="pattern-left-item item-5"></span>
//                     </div>
//                     <div className="pattern-left-bottom-group">
//                         <span className="pattern-left-item item-1"></span>
//                         <span className="pattern-left-item item-2"></span>
//                         <span className="pattern-left-item item-3"></span>
//                         <span className="pattern-left-item item-4"></span>
//                         <span className="pattern-left-item item-5"></span>
//                     </div>
//                 </div>
//                 <div className="pattern-right">
//                     <div className="pattern-right-top-group">
//                         <span className="pattern-right-item"></span>
//                         <span className="pattern-right-item"></span>
//                         <span className="pattern-right-item"></span>
//                         <span className="pattern-right-item"></span>
//                     </div>
//                     <div className="pattern-right-bottom-group">
//                         <span className="pattern-right-item"></span>
//                         <span className="pattern-right-item"></span>
//                         <span className="pattern-right-item"></span>
//                         <span className="pattern-right-item"></span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;

