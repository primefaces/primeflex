import Head from 'next/head';
import { classNames } from 'primereact/utils';
import { useEffect, useState } from 'react';
import Analytics from '../components/layout/analytics';
import AnimationsSection from './landing/animationssection';
import BlocksSection from './landing/blockssection';
import CardsSection from './landing/cardssection';
import FooterSection from './landing/footersection';
import HeaderSection from './landing/headersection';
import HeroSection from './landing/herosection';
import ResponsiveSection from './landing/responsivesection';
import StyleSection from './landing/stylesection';
import UsersSection from './landing/userssection';

export default function Home(props) {
    const [tableTheme, setTableTheme] = useState('bootstrap4-light-blue');
    const rootClassName = classNames('landing', { 'landing-light': !props.dark, 'landing-dark': props.dark, 'landing-news-active': props.newsActive });

    const toggleColorScheme = () => {
        const darkMode = !props.dark;
        const newTheme = darkMode ? 'bootstrap4-dark-blue' : 'bootstrap4-light-blue';

        props.onThemeChange(newTheme, darkMode);
    };

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
                <HeroSection dark={props.dark} />
                <UsersSection dark={props.dark} />
            </div>
            <CardsSection />
            <AnimationsSection dark={props.dark} />
            <StyleSection />
            <ResponsiveSection dark={props.dark} />
            <BlocksSection dark={props.dark} />
            <FooterSection dark={props.dark} />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
