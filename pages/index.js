import Head from 'next/head';
import NewsSection from '../components/news/newssection';
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
    const toggleColorScheme = () => {
        props.onThemeChange(!props.dark);
    };

    return (
        <div className="landing">
            <Head>
                <title>PrimeFlex - Utility First CSS Library</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="PrimeFlex is a utility-first CSS library." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@primeflexcss" />
                <meta name="twitter:title" content="PrimeFlex | Utility-First CSS Library" />
                <meta name="twitter:description" content="PrimeFlex is a utility-first CSS library." />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="PrimeFlex - Utility First CSS Library"></meta>
                <meta property="og:url" content="https://primeflex.org"></meta>
                <meta property="og:description" content="PrimeFlex is a utility-first CSS library." />
                <meta property="og:image" content="https://www.primefaces.org/static/social/primeflex-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link rel="icon" href="https://www.primefaces.org/cdn/primeflex/images/favicon.ico" type="image/x-icon"></link>
            </Head>
            <div className="landing-intro">
                {props.newsActive && <NewsSection announcement={props.announcement} onClose={props.onNewsClose} />}
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
