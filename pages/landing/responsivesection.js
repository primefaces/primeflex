import Link from 'next/link';
import { useEventListener } from 'primereact/hooks';
import { DomHandler } from 'primereact/utils';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const ResponsiveSection = ({ dark }) => {
    const [iframeWidth, setIframeWidth] = useState(576);
    const [maxIframeWidth, setMaxIframeWidth] = useState(1200);
    const [activeSections, setActiveSections] = useState([]);
    const IframeRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(null);
    const [semiActiveSections, setSemiActiveSections] = useState([]);

    const breakpoints = useMemo(
        () => [
            { label: 'Screen 1200px', width: 1200, buttonWidth: 102 },
            { label: 'Laptop 992px', width: 992, buttonWidth: 108 },
            { label: 'Tablet 768px', width: 768, buttonWidth: 95 },
            { label: 'Mobile 576px', width: 576, buttonWidth: 576 },
            { label: 'Tablet 768px', width: 768, buttonWidth: 95 },
            { label: 'Laptop 992px', width: 992, buttonWidth: 108 },
            { label: 'Screen 1200px', width: 1200, buttonWidth: 102 }
        ],
        []
    );

    const isMobile = windowWidth < 576;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth - 30);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        const sortedBreakpoints = [...breakpoints].sort((a, b) => b.width - a.width);
        const active = sortedBreakpoints.filter((bp) => iframeWidth >= bp.width);

        setActiveSections(active.map((a) => a.label));

        const sortedBreakpointsAscending = [...breakpoints].sort((a, b) => a.width - b.width);
        const semiActive = sortedBreakpointsAscending.find((bp) => iframeWidth <= bp.width);

        setSemiActiveSections(semiActive ? [semiActive.label] : []);
    }, [iframeWidth, breakpoints]);

    useEffect(() => {
        const visibleBreakpoints = breakpoints.filter((breakpoint) => windowWidth >= breakpoint.width);
        const newMaxIframeWidth = Math.max(...visibleBreakpoints.map((bp) => bp.width));

        setMaxIframeWidth(newMaxIframeWidth);
    }, [windowWidth, breakpoints]);

    const handleMouseDown = (e) => {
        e.preventDefault();
        const initialX = e.clientX;
        const initialWidth = iframeWidth;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - initialX;

            setIframeWidth(initialWidth + deltaX);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleBreakpointClick = (width) => {
        setIframeWidth(width);
    };

    const changeIframeBodyClass = useCallback(() => {
        const iframeDocument = IframeRef.current.contentDocument || IframeRef.current.contentWindow.document;
        const frameBody = iframeDocument.documentElement;

        DomHandler.removeMultipleClasses(frameBody, 'dark light');
        DomHandler.addClass(frameBody, dark ? 'dark' : 'light');
    }, [dark]);

    const [bindIframeLoadListener] = useEventListener({
        target: IframeRef,
        type: 'load',
        listener: changeIframeBodyClass
    });

    useEffect(() => {
        changeIframeBodyClass();
    }, [dark, changeIframeBodyClass]);

    useEffect(() => {
        bindIframeLoadListener();
    }, [bindIframeLoadListener]);

    return (
        <section className="landing-responsive-section relative landing-section-border">
            <div className="landing-responsive-container pt-7 pb-8 px-5 relative z-5">
                <div className="landing-responsive-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    <h1 className="landing-title font-bold m-0 text-6xl md:text-7xl">
                        Adaptive <br></br>for Every Screen
                    </h1>
                    <h3 className="landing-subtitle m-0 text-xl md:text-2xl font-normal text-center">
                        PrimeFlex guarantees optimal adaptability. Enjoy seamless display and functionality on every screen size, ensuring universal access to your projects.
                    </h3>

                    <Link href="/installation" className="linkbox-button active w-9rem fadeinleft animation-duration-2000 animation-ease-out">
                        Learn more
                    </Link>
                </div>
                <div className="landing-responsive-wrapper w-full mt-6 mx-auto">
                    <div className="landing-responsive-breaks flex justify-content-center gap-1 mx-auto w-full">
                        {breakpoints.map((breakpoint, index) => {
                            const isMobile = windowWidth < 576;
                            const isMobileBreakpoint = breakpoint.label === 'Mobile 576px';
                            const isFirstMobileBreakpoint = isMobileBreakpoint && index === breakpoints.findIndex((bp) => bp.label === 'Mobile 576px');
                            const isHidden = (!isMobile && windowWidth < breakpoint.width) || (isMobile && !isFirstMobileBreakpoint);

                            return (
                                <div
                                    key={index}
                                    className={`opacity-60 white-space-nowrap text-sm text-center border-1 py-2 cursor-pointer transition-duration-200
                            ${activeSections.includes(breakpoint.label) ? 'active-responsive' : ''}
                            ${semiActiveSections.includes(breakpoint.label) ? 'semi-active-break' : ''}
                            ${isHidden ? 'hidden' : isMobile && isFirstMobileBreakpoint ? 'w-full' : ''}`}
                                    style={{ width: `${isMobile && isFirstMobileBreakpoint ? '100%' : breakpoint.buttonWidth + 'px'}`, minWidth: `${isMobile ? 'auto' : breakpoint.buttonWidth + 'px'}` }}
                                    onClick={() => handleBreakpointClick(breakpoint.width)}
                                >
                                    {isMobile && isFirstMobileBreakpoint ? `Mobile ${windowWidth}px` : breakpoint.label}
                                </div>
                            );
                        })}
                    </div>
                    <div className="landing-responsive-iframe w-full mx-auto">
                        <div className={'resize-wrapper m-auto relative ' + (isMobile ? 'w-full' : '')} style={{ width: `${isMobile ? windowWidth + 'px' : Math.min(iframeWidth, maxIframeWidth)}px` }}>
                            <iframe ref={IframeRef} src="/landing/example" className="w-full pointer-events-none z-5 relative mt-1" width={Math.min(iframeWidth, maxIframeWidth)} height="628" frameBorder="0" scrolling="no" />
                            {windowWidth >= 576 && <div className="resize-handle absolute z-10" onMouseDown={handleMouseDown}></div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsiveSection;
