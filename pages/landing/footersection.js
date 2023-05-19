import Link from 'next/link';

const FooterSection = (props) => {
    return (
        <section className="landing-footer relative">
            <div className="landing-footer-container  py-8 px-5 relative z-5 flex flex-column flex-shrink-0 justify-content-center align-items-center ">
                <div className="landing-footer-row row-1 flex flex-row justify-content-between align-items-center w-full pb-3">
                    <div className="landing-footer-left">
                        {' '}
                        <Link href="/" className="header-logo" aria-label="PrimeReact logo">
                            <img id="header-logo" src={`/images/primeflex-logo-${props.dark ? 'white' : 'dark'}.svg`} alt="prime"></img>
                        </Link>
                    </div>
                    <div className="landing-footer-right flex flex-row gap-1 md:gap-3 align-items-center">
                        <a href="https://forum.primefaces.org/" target="_blank" rel="noopener noreferrer" className="linkbox header-button flex align-items-center justify-content-center flex-shrink-0">
                            <i className="pi pi-comments"></i>
                        </a>
                        <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" className="linkbox header-button flex align-items-center justify-content-center flex-shrink-0">
                            <i className="pi pi-discord"></i>
                        </a>
                        <a href="https://github.com/primefaces/primeflex" target="_blank" rel="noopener noreferrer" className="linkbox header-button mr-1 flex align-items-center justify-content-center flex-shrink-0">
                            <i className="pi pi-github"></i>
                        </a>
                    </div>
                </div>
                <div className="landing-footer-row flex flex-row justify-content-between align-items-center w-full pt-3">
                    <div className="landing-footer-left">
                        <span>PrimeFlex 2023. All rights reserved.</span>
                    </div>
                    <div className="landing-footer-right flex flex-row gap-3 align-items-center">Follow for more</div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
