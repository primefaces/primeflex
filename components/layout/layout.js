import Head from 'next/head';
import { useRouter } from 'next/router';
import PrimeReact from 'primereact/api';
import { classNames } from 'primereact/utils';
import { useEffect, useState } from 'react';
import Analytics from './analytics';
import AppContentContext from './appcontentcontext';
import Footer from './footer';
import Menu from './menu';
import Topbar from './topbar';

export default function Layout(props) {
    const [sidebarActive, setSidebarActive] = useState(false);
    const router = useRouter();

    const wrapperClassName = classNames('layout-wrapper', {
        'layout-wrapper-dark': props.dark,
        'layout-wrapper-light': !props.dark
    });
    const maskClassName = classNames('layout-mask', {
        'layout-mask-active': sidebarActive
    });

    const onMenuButtonClick = () => {
        setSidebarActive(true);
    };

    const toggleColorScheme = () => {
        props.onThemeChange(!props.dark);
    };

    const onMaskClick = () => {
        setSidebarActive(false);
    };

    useEffect(() => {
        if (sidebarActive) document.body.classList.add('blocked-scroll');
        else document.body.classList.remove('blocked-scroll');
    }, [sidebarActive]);

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            setSidebarActive(false);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    PrimeReact.ripple = true;

    return (
        <div className={wrapperClassName}>
            <Analytics />
            <Head>
                <title>PrimeFlex</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well." />
                <link rel="icon" href="https://primefaces.org/cdn/primereact/images/favicon.ico" type="image/x-icon"></link>
            </Head>
            <Topbar dark={props.dark} onMenuButtonClick={onMenuButtonClick} onToggleColorScheme={toggleColorScheme} />
            <Menu active={sidebarActive} darkTheme={props.dark} />
            <AppContentContext.Provider
                value={{
                    ripple: true,
                    inputStyle: 'outlined',
                    darkTheme: props.dark
                }}
            >
                <div className="layout-content">
                    <div className="layout-content-inner">
                        {props.children}
                        <Footer></Footer>
                    </div>
                </div>
            </AppContentContext.Provider>
            <div className={maskClassName} onClick={onMaskClick}></div>
        </div>
    );
}
