import '@docsearch/css';
import { classNames } from 'primereact/utils';
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import AnnouncementData from '../data/news.json';
import '../styles/layout/layout.scss';
import '../styles/primeflex.css';
import '../styles/prism.scss';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(false);
    const [newsActive, setNewsActive] = useState(false);
    const announcement = useRef(AnnouncementData);
    const storageKey = 'primeflex-news';
    const theme = dark ? 'primeone-dark' : 'primeone-light';

    const props = {
        dark: dark,
        newsActive: newsActive && announcement.current,
        announcement: announcement.current,
        onNewsClose: () => {
            setNewsActive(false);

            const item = {
                hiddenNews: announcement.current.id
            };

            localStorage.setItem(storageKey, JSON.stringify(item));
        },
        onThemeChange: (dark) => {
            setDark(dark);
        }
    };

    useEffect(() => {
        const itemString = localStorage.getItem(storageKey);

        if (itemString) {
            const item = JSON.parse(itemString);

            if (item.hiddenNews && item.hiddenNews !== announcement.current.id) {
                setNewsActive(true);
            }
        } else {
            setNewsActive(true);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const media = window.matchMedia('(prefers-color-scheme: dark)');

            if (media.matches) {
                setDark(true);
            }
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.pfTheme = dark ? 'primeone-dark' : 'primeone-light';
    }, [dark]);

    let content;

    if (Component.getLayout) {
        content = Component.getLayout(<Component {...props} />);
    } else {
        content = (
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        );
    }

    return <div className={classNames('app', { 'app-news-active': props.newsActive })}>{content}</div>;
}
