import Link from 'next/link';
import { DomHandler } from 'primereact/utils';
import { useEffect, useRef, useState } from 'react';

const ResponsiveSection = ({ dark }) => {
    const [iframeWidth, setIframeWidth] = useState(576);
    const [activeSections, setActiveSections] = useState([]);
    const IframeRef = useRef(null);

    const breakpoints = [
        { label: 'Screen 1200px', width: 1200, buttonWidth: 102 },
        { label: 'Laptop 992px', width: 992, buttonWidth: 108 },
        { label: 'Tablet 768px', width: 768, buttonWidth: 95 },
        { label: 'Mobile 576px', width: 576, buttonWidth: 576 },
        { label: 'Tablet 768px', width: 768, buttonWidth: 95 },
        { label: 'Laptop 992px', width: 992, buttonWidth: 108 },
        { label: 'Screen 1200px', width: 1200, buttonWidth: 102 }
    ];

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

    useEffect(() => {
        const sortedBreakpoints = [...breakpoints].sort((a, b) => b.width - a.width);
        const active = sortedBreakpoints.filter((bp) => iframeWidth >= bp.width);
        setActiveSections(active.map((a) => a.label));
    }, [iframeWidth]);

    useEffect(() => {
        const iframeDocument = IframeRef.current.contentDocument || IframeRef.current.contentWindow.document;
        const frameBody = iframeDocument.documentElement;

        DomHandler.removeMultipleClasses(frameBody, 'dark light');
        DomHandler.addClass(frameBody, dark ? 'dark' : 'light');
    }, [dark]);

    return (
        <section className="landing-responsive-section relative">
            <div className="landing-responsive-container pt-7 pb-8 px-5 relative z-5">
                <div className="landing-responsive-content text-center flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center mb-5">
                    <h1 className="landing-responsive-title font-semibold m-0">
                        Adaptive <br></br>for Every Screen
                    </h1>
                    <h3 className="landing-responsive-subtitle m-0 text-xl font-normal text-center">
                        Unlock consistency and flexibility in your designs with our collection of pre-built components and utility classes, designed to work seamlessly across all screen sizes.
                    </h3>

                    <Link href="/installation" className="linkbox-button active w-9rem fadeinleft animation-duration-2000 animation-ease-out text-700">
                        Learn more
                    </Link>
                </div>
                <div className="landing-responsive-wrapper w-full mt-6 mx-auto">
                    <div className="landing-responsive-breaks flex justify-content-center gap-1 mx-auto w-full">
                        {breakpoints.map((breakpoint) => (
                            <div
                                className={`opacity-60  text-sm text-center border-1 py-2 cursor-pointer transition-duration-200 ${activeSections.includes(breakpoint.label) ? 'active-responsive' : ''}`}
                                style={{ width: `${breakpoint.buttonWidth}px` }}
                                onClick={() => handleBreakpointClick(breakpoint.width)}
                            >
                                {breakpoint.label}
                            </div>
                        ))}
                    </div>
                    <div className="landing-responsive-iframe w-full mx-auto">
                        <div className="resize-wrapper m-auto relative" style={{ width: `${iframeWidth}px` }}>
                            <iframe ref={IframeRef} src="/landing/example" className="w-full pointer-events-none z-5 relative" width={iframeWidth} height="628" frameBorder="0" scrolling="no" />
                            <div className="resize-handle absolute  z-10" onMouseDown={handleMouseDown}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsiveSection;
