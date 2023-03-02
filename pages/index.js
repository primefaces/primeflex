import Head from 'next/head';
import { useEffect, useState } from 'react';
import Analytics from '../components/layout/analytics';
import { classNames } from 'primereact/utils';
import Landing from './landing/index';

export default function Home(props) {
    const [tableTheme, setTableTheme] = useState('bootstrap4-light-blue');
    const rootClassName = classNames('landing', { 'landing-light': !props.dark, 'landing-dark': props.dark });

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
            <Landing />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
