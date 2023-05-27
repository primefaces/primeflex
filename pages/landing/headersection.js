import { DocSearch } from '@docsearch/react';
import Link from 'next/link';
import { StyleClass } from 'primereact/styleclass';
import { classNames } from 'primereact/utils';
import { useEffect, useRef, useState } from 'react';

const HeaderSection = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const colorSchemeIcon = classNames('pi', { 'pi-sun': props.dark, 'pi-moon': !props.dark });
    const containerElement = useRef(null);
    const blockOverlayActionRef = useRef(null);

    const [isHidden, setIsHidden] = useState(false);

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

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
                        <img id="header-logo" src="https://www.primefaces.org/cdn/primeflex/images/PrimeFlexLogo.svg" alt="prime"></img>
                    </Link>
                </div>
                <div className="landing-header-center">
                    <DocSearch appId="TLMMWZFW0F" apiKey="e6191f9edfded2e69492f3f3b315e237" indexName="primeflex" container="" debug={false} />
                </div>
                <div className="landing-header-right flex  align-items-center">
                    <nav className="scalein origin-top">
                        <ol className="list-none m-0 p-0 flex md:flex-row flex-column lg:align-items-center font-semibold">
                            <li className="mr-1">
                                <Link href="/installation">Docs</Link>
                            </li>
                            <li className="mr-1 relative">
                                <StyleClass nodeRef={blockOverlayActionRef} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                    <a ref={blockOverlayActionRef} className="cursor-pointer">
                                        Blocks
                                    </a>
                                </StyleClass>
                                <div id="blocks-overlay" className={classNames('menu-overlay hidden md:absolute  top-auto  origin-top ', { hidden: isHidden })}>
                                    <ul className="list-none ">
                                        <li>
                                            <a href="https://blocks.primeng.org/#/" target="_blank" onClick={toggleMenuItemClick}>
                                                <img src="https://www.primefaces.org/cdn/primeflex/images/landing/angular-logo.svg" alt="Angular"></img>
                                                <span>Angular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://blocks.primevue.org/#/" target="_blank" onClick={toggleMenuItemClick}>
                                                <img src="https://www.primefaces.org/cdn/primeflex/images/landing/vue-logo.svg" alt="Vue"></img>
                                                <span>Vue</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://blocks.primereact.org/" target="_blank" onClick={toggleMenuItemClick}>
                                                <img src="https://www.primefaces.org/cdn/primeflex/images/landing/react-logo.svg" alt="React"></img>
                                                <span>React</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.primefaces.org/primeblocks-jsf/" target="_blank" onClick={toggleMenuItemClick}>
                                                <img src="https://www.primefaces.org/cdn/primeflex/images/landing/jsf-logo.svg" alt="JSF"></img>
                                                <span>JSF</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <DocSearch appId="TLMMWZFW0F" apiKey="e6191f9edfded2e69492f3f3b315e237" indexName="primeflex" container="" debug={false} />
                    <button type="button" className="linkbox border-none header-button mx-1 inline-flex align-items-center justify-content-center mr-1 cursor-pointer" onClick={changeColorScheme}>
                        <i className={colorSchemeIcon}></i>
                    </button>
                    <a href="https://forum.primefaces.org/" target="_blank" rel="noopener noreferrer" className="linkbox header-button flex align-items-center justify-content-center flex-shrink-0">
                        <i className="pi pi-comments"></i>
                    </a>
                    <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" className="linkbox header-button flex align-items-center justify-content-center flex-shrink-0">
                        <i className="pi pi-discord"></i>
                    </a>
                    <a href="https://github.com/primefaces/primeflex" target="_blank" rel="noopener noreferrer" className="linkbox header-button mr-1 flex align-items-center justify-content-center flex-shrink-0">
                        <i className="pi pi-github"></i>
                    </a>
                    <a type="button" className="linkbox header-button inline-flex align-items-center justify-content-center lg:hidden  menu-button" onClick={() => setMenuActive(!menuActive)}>
                        <i className="pi pi-bars"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
