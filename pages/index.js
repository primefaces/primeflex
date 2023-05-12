import Head from 'next/head';
import { useEffect, useState } from 'react';
import Analytics from '../components/layout/analytics';
import { classNames } from 'primereact/utils';
import Landing from './landing/index';
import HeroSection from './landing/herosection';
import HeaderSection from './landing/headersection';
import CardsSection from './landing/cardssection';
import BlocksSection from './landing/blockssection';
import StyleSection from './landing/stylesection';
import ResponsiveSection from './landing/responsivesection';
import AnimationsSection from './landing/animationssection';

export default function Home(props) {
    
    const [tableTheme, setTableTheme] = useState('bootstrap4-light-blue');
    const rootClassName = classNames('landing', { 'landing-light': !props.dark, 'landing-dark': props.dark, 'landing-news-active': props.newsActive });

    const toggleColorScheme = () => {
        const darkMode = !props.dark;
        const newTheme = darkMode ? 'bootstrap4-dark-blue' : 'bootstrap4-light-blue';

        props.onThemeChange(newTheme, darkMode);
    };

    const changeTableTheme = (newTheme) => {
        props.onTableThemeChange(tableTheme, newTheme);
        setTableTheme(newTheme);
    };

    useEffect(() => {
        const newTheme = props.dark ? tableTheme.replace('light', 'dark') : tableTheme.replace('dark', 'light');

        changeTableTheme(newTheme);
    }, [props.dark]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={rootClassName}>
            <Analytics />
            <Head>
                <meta charSet="UTF-8" />
                <title>PrimeFlex</title>
                <meta name="description" content="PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well." />
            </Head>
            <div className="landing-intro">
                <HeaderSection dark={props.dark} onToggleColorScheme={toggleColorScheme} />
                <HeroSection />
            </div>
            <CardsSection />
            <AnimationsSection />
            <StyleSection />
            <ResponsiveSection />
            <BlocksSection />
            
            {/* <Landing /> */}
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
